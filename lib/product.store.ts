// lib/lista.store.ts
import { create } from 'zustand';

let productIdCounter = 1;
let listIdCounter = 1;

const useStoreProduct = create<ListStore>((set) => ({
lists: [],
  
  addList: (nameList) => {
    const newList: List = {
      id: listIdCounter++,
      nameList,
      products: [],
    };
    set((state) => ({ lists: [...state.lists, newList] }));
  },

  addProductToList: (listId, product) => {
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              products: [...list.products, { ...product, id: productIdCounter++ }],
            }
          : list
      ),
    }));
  },

  removeProductFromList: (listId, productId) => {
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              products: list.products.filter((p) => p.id !== productId),
            }
          : list
      ),
    }));
  },
  
  updateProductQuantity: (listId, productId, delta) => {
  set((state) => ({
    lists: state.lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            products: list.products.map((p) =>
              p.id === productId
                ? {
                    ...p,
                    quantity: Math.max(1, p.quantity + delta), // Nunca menos de 1
                  }
                : p
            ),
          }
        : list
    ),
  }));
  },


  deleteList: (listId) => {
    set((state) => ({
      lists: state.lists.filter((list) => list.id !== listId),
    }));
  },
}));

export default useStoreProduct;
