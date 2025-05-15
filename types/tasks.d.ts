// Enlista App Types

interface TaskProps {
    title: string;
    desc?: string;
    category: CategoryTaskProps;
    priority: PriorityStatic;
    step: number;
}

interface CategoryTaskProps {
    name: string;
}

interface CategoryStatic {
    label: string;
    value: string;
}

interface StoreTasks {
    totalTask: number;
    totalCompleteTasks: number,
    tasks: string[];
    loadTaskFromFirebase:() => void;
}

interface TaskItem {
    title: string;
    category: string;
    completed: boolean;
    priority: PriorityStatic;
    step: number; // Num Max 5
    createdAt: date;
}

interface PriorityStatic {
    label: string;
    value: number;
}

interface Product {
  id: number;
  productName: string;
  quantity: number;
}

interface List {
  id: number;
  nameList: string;
  products: Product[];
}

interface ListStore {
  lists: List[];
  addList: (nameList: string) => void;
  addProductToList: (listId: number, product: Product) => void;
  removeProductFromList: (listId: number, productId: number) => void;
  updateProductQuantity: (listId: number, productId: number, delta: number) => void;
  deleteList: (listId: number) => void;
}

interface StoreListProducts {
    nameList: string;
    totalProducts: number;
    products: Product[];
    saveProductsInShopCar: (listProducts) => void;
}