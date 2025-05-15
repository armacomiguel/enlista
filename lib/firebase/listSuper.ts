import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  query,
  orderBy,
  Unsubscribe, increment
} from 'firebase/firestore';
import { db } from '../firebase';

export const getListById = async (id: string) => {
  const docRef = doc(db,'lists', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const addProductToListInFirebase = async (
  listId: string,
  product: { productName: string; quantity: number}
) => {
  const productsRef = collection(db, 'lists', listId, 'products');
  await addDoc(productsRef, {
    ...product,
    createdAt: serverTimestamp(), // Agrega la fecha de creación
  });
};

export const updateProductQuantity = async (listId: string, productId: string, delta: number) => {
  const ref = doc(db,'lists', listId, 'products', productId);
  await updateDoc(ref, {
    quantity: increment(delta)
  });
};

export const deleteProduct = async (listId: string, productId: string) => {
  const ref = doc(db,'lists', listId, 'products', productId);
  await deleteDoc(ref);
}

// Crear una nueva lista
export async function createList(nameList: string): Promise<string> {
  const docRef = await addDoc(collection(db, 'lists'), {
    nameList,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

// Eliminar una lista y sus productos
export async function deleteList(listId: string) {
  const productsRef = collection(db, 'lists', listId, 'products');
  const snapshot = await getDocs(productsRef);
  await Promise.all(snapshot.docs.map((doc) => deleteDoc(doc.ref)));
  await deleteDoc(doc(db, 'lists', listId));
}

// Agregar un producto a una lista
export async function addProductToList(listId: string, productName: string, quantity: number) {
  const productsRef = collection(db, 'lists', listId, 'products');
  await addDoc(productsRef, {
    productName,
    quantity,
    createdAt: serverTimestamp(),
  });
}

// Editar un producto (nombre y/o cantidad)
export async function updateProduct(listId: string, productId: string, data: { quantity?: number; productName?: string }) {
  const productRef = doc(db, 'lists', listId, 'products', productId);
  await updateDoc(productRef, data);
}

// Incrementar cantidad
export async function incrementQuantity(listId: string, productId: string) {
  const productRef = doc(db, 'lists', listId, 'products', productId);
  await updateDoc(productRef, { quantity: increment(1) });
}

// Decrementar cantidad (y evitar que baje de 1 desde la lógica de UI)
export async function decrementQuantity(listId: string, productId: string) {
  const productRef = doc(db, 'lists', listId, 'products', productId);
  await updateDoc(productRef, { quantity: increment(-1) });
}

// Eliminar un producto
export async function removeProduct(listId: string, productId: string) {
  const productRef = doc(db, 'lists', listId, 'products', productId);
  await deleteDoc(productRef);
}

// Obtener todas las listas en tiempo real
export function subscribeToLists(callback: (lists: any[]) => void): Unsubscribe {
  const listsRef = collection(db, 'lists');
  const q = query(listsRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const lists = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(lists);
  });
}

// Obtener productos de una lista en tiempo real
export function subscribeToProducts(listId: string, callback: (products: any[]) => void): Unsubscribe {
  const productsRef = collection(db, 'lists', listId, 'products');
  const q = query(productsRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(products);
  });
}

// Borrar todos los productos de una lista (limpiar la lista sin borrarla)
export async function clearList(listId: string) {
  const productsRef = collection(db, 'lists', listId, 'products');
  const snapshot = await getDocs(productsRef);
  await Promise.all(snapshot.docs.map((doc) => deleteDoc(doc.ref)));
}
