import { create } from 'zustand';
import { obtenerTareas } from './firebase/tasks';

type Product = {
  id: number;
  name: string;
  quantity: number;
};

interface StoreProducts {
    totalProducts: number;
    products: Product[];
    saveProductsInShopCar: (listProducts) => void;
}

const useStoreProduct = create<StoreProducts>((set) => ({
    totalProducts: 0,
    products: [],
    saveProductsInShopCar: async (listProducts) => {
        try {
            console.log("listProducts: ", listProducts);
            // Setear nuevos productos y total de productos
            // a veces estara vacia la lista de productos
            // en otras ocaciones tendra datos, ejeplo: [{"id": 1, "name": "Falda de res", "quantity": 1}]
            // tendra entrada nueva de datos
            // y cuando guarde debe de respetar los datos anteriores, ejemplo: [{"id": 1, "name": "Falda de res", "quantity": 1}, {"id": 2, "name": "Molida", "quantity": 1}]
           

            set({
                totalProducts: listProducts.length,
                products:  listProducts,
            });

            // let dataList = {};
            // set((state) => {

            //     if(state.products.length > 0) {
                    
            //         dataList = {
            //             totalProducts: listProducts.length,
            //             products: {...state.products, listProducts},
            //         }
            //     } else {
            //         dataList = {
            //             totalProducts: listProducts.length,
            //             products:  listProducts,
            //         }
            //     }
                    
            //     return dataList;
            // });
        } catch (error) {
            console.log("[product.store.ts][saveProductsInShopCar] | Error: ", error);
        }
    },
}));

export default useStoreProduct;