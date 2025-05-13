
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc, Timestamp 
} from 'firebase/firestore';

const DB_TASK = "tasks";


export const agregarTarea = async ({title, desc, category, step, priority}: TaskProps) => {
  try {
    const docRef = await addDoc(collection(db, DB_TASK), {
      title,
      desc,
      category,
      step,
      priority,
      completed: false,
      createdAt: Timestamp.now(),
    });
    console.log('Tarea agregada con ID:', docRef.id);
  } catch (error) {
    console.error('Error al agregar tarea:', error);
  }
};

export const obtenerTareas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, DB_TASK));
    const tareas: any[] = [];
    querySnapshot.forEach((doc) => {
      tareas.push({ id: doc.id, ...doc.data() });
    });
    return tareas;
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    return [];
  }
}

// Actualizar tarea - Complete Task
export const actualizarTarea = async (id: string) => {
  const ref = doc(db, DB_TASK, id, );
  return await updateDoc(ref, {completed: true});
};

// Eliminar tarea
export const eliminarTarea = async (id: string) => {
  const ref = doc(db, DB_TASK, id);
  return await deleteDoc(ref);
};
