

export const priorityTask:PriorityStatic[] = [
  { label: "baja", value: 1 },
  { label: "media", value: 2 },
  { label: "alta", value: 3 },
]

export const CAT = [
  { // Productos de Carne
    categoryId: 1,
    name: "Carne",
    items: [
        { id: 1, name: "Falda de res" },
        { id: 2, name: "Carne molida de res" },
        { id: 3, name: "Carne para asar" },
        { id: 4, name: "Bistec delgado" },
        { id: 5, name: "Diezmillo" },
        { id: 6, name: "Costilla para asar" },
        { id: 7, name: "Chuleta de cerdo" },
        { id: 8, name: "Espinazo de cerdo" },
        { id: 9, name: "Lomo de cerdo" },
        { id: 10, name: "Pierna de cerdo" },
        { id: 11, name: "Pechuga de pollo" },
        { id: 12, name: "Muslos de pollo" },
        { id: 13, name: "Milanesa de pollo" },
        { id: 14, name: "Carne al pastor" },
        { id: 15, name: "Chorizo rojo o verde" }
    ],
  },
  { // Productos de Fruta
    categoryId: 2,
    name: "Fruta",
    items: [
        { id: 1, name: "Plátano" },
        { id: 2, name: "Manzana roja" },
        { id: 3, name: "Manzana verde" },
        { id: 4, name: "Naranja" },
        { id: 5, name: "Sandía" },
        { id: 6, name: "Melón" },
        { id: 7, name: "Papaya" },
        { id: 8, name: "Uvas verdes" },
        { id: 9, name: "Mandarina" },
        { id: 10, name: "Fresa" },
        { id: 11, name: "Piña" },
        { id: 12, name: "Mango" },
        { id: 13, name: "Guayaba" },
        { id: 14, name: "Tuna" },
        { id: 15, name: "Limón" }
    ],
  },
  { // Productos de Verdura
    categoryId: 3,
    name: "Verduta",
    items: [
        { id: 1, name: "Cebolla blanca" },
        { id: 2, name: "Cebolla morada" },
        { id: 3, name: "Tomate" },
        { id: 4, name: "Ajo" },
        { id: 5, name: "Papa" },
        { id: 6, name: "Zanahoria" },
        { id: 7, name: "Cilantro" },
        { id: 8, name: "Calabacita" },
        { id: 9, name: "Lechuga" },
        { id: 10, name: "Espinaca" },
        { id: 11, name: "Brócoli" },
        { id: 12, name: "Coliflor" },
        { id: 13, name: "Nopales" },
        { id: 14, name: "Elote" },
        { id: 15, name: "Chile jalapeño" }
    ],
  },
  { // Productos de Higiene
    categoryId: 4,
    name: "Higiene",
    items: [
        { id: 1, name: "Papel higiénico" },
        { id: 2, name: "Pasta dental" },
        { id: 3, name: "Cepillo de dientes" },
        { id: 4, name: "Jabón corporal" },
        { id: 5, name: "Shampoo" },
        { id: 6, name: "Acondicionador" },
        { id: 7, name: "Desodorante" },
        { id: 8, name: "Toallas sanitarias" },
        { id: 9, name: "Crema" },
        { id: 10, name: "Jabón para ropa" },
        { id: 11, name: "Suavizante de telas" },
        { id: 12, name: "Detergente en polvo" },
        { id: 13, name: "Cloro" },
        { id: 14, name: "Limpiador multiusos" },
        { id: 15, name: "Toallas húmedas" } 
    ],
  },
  {
    categoryId: 5, // Lácteos y derivados
    name: "Lácteos",
    items: [
        { id: 1, name: "Leche entera" },
        { id: 2, name: "Queso manchego" },
        { id: 3, name: "Yogurt natural" },
        { id: 4, name: "Crema ácida" },
        { id: 5, name: "Mantequilla" },
    ],
  },
  {
    categoryId: 6, // Panadería y tortillas
    name: "Panadería",
    items: [
        { id: 1, name: "Pan de caja" },
        { id: 2, name: "Bolillos" },
        { id: 3, name: "Tortillas de maíz" },
        { id: 4, name: "Tortillas de harina" },
        { id: 5, name: "Pan dulce" },
    ],
  },
  {
    categoryId: 7, // Abarrotes / Despensa
    name: "Abarrotes",
    items: [
        { id: 1, name: "Arroz" },
        { id: 2, name: "Frijol" },
        { id: 3, name: "Aceite" },
        { id: 4, name: "Azúcar" },
        { id: 5, name: "Sal" },
        { id: 6, name: "Sopas instantáneas" },
        { id: 7, name: "Atún en lata" },
    ],
  },
  {
    categoryId: 8, // Bebidas
    name: "Bebidas",
    items: [
        { id: 1, name: "Agua embotellada" },
        { id: 2, name: "Refrescos" },
        { id: 3, name: "Jugo de naranja" },
        { id: 4, name: "Café soluble" },
        { id: 5, name: "Té en bolsitas" },
    ],
    },
    {
    categoryId: 9, // Botanas y dulces
    name: "Botanas",
    items: [
        { id: 1, name: "Papas fritas" },
        { id: 2, name: "Cacahuates" },
        { id: 3, name: "Galletas" },
        { id: 4, name: "Chocolate" },
        { id: 5, name: "Gomitas" },
    ],
    },
    {
    categoryId: 10, // Congelados
    name: "Congelados",
    items: [
        { id: 1, name: "Verduras congeladas" },
        { id: 2, name: "Nuggets de pollo" },
        { id: 3, name: "Helado" },
        { id: 4, name: "Pizza congelada" },
        { id: 5, name: "Paletas de hielo" },
    ],
    },
    {
    categoryId: 11, // Limpieza del hogar
    name: "Limpieza",
    items: [
        { id: 1, name: "Detergente para ropa" },
        { id: 2, name: "Cloro" },
        { id: 3, name: "Fabuloso" },
        { id: 4, name: "Toallas desinfectantes" },
        { id: 5, name: "Bolsas para basura" },
    ],
    },
    {
    categoryId: 12, // Mascotas
    name: "Mascotas",
    items: [
        { id: 1, name: "Croquetas para perro" },
        { id: 2, name: "Croquetas para gato" },
        { id: 3, name: "Arena para gato" },
        { id: 4, name: "Premios para mascota" },
        { id: 5, name: "Shampoo para perro" },
    ],
    },
    {
    categoryId: 13, // Cuidado personal
    name: "Personal",
    items: [
        { id: 1, name: "Rastrillos" },
        { id: 2, name: "Cremas corporales" },
        { id: 3, name: "Papel facial" },
        { id: 4, name: "Toallas húmedas" },
        { id: 5, name: "Gel antibacterial" },
    ],
    },
    {
    categoryId: 14, // Bebés
    name: "Bebés",
    items: [
        { id: 1, name: "Pañales" },
        { id: 2, name: "Toallitas húmedas para bebé" },
        { id: 3, name: "Fórmula infantil" },
        { id: 4, name: "Shampoo para bebé" },
        { id: 5, name: "Papillas" },
    ],
    },
    {
    categoryId: 15, // Carnes frías y embutidos
    name: "Carnes frías",
    items: [
        { id: 1, name: "Jamón de pavo" },
        { id: 2, name: "Salchicha" },
        { id: 3, name: "Tocino" },
        { id: 4, name: "Chorizo" },
        { id: 5, name: "Salami" },
    ],
    },
    {
    categoryId: 16, // Huevos y básicos
    name: "Básicos",
    items: [
        { id: 1, name: "Huevo blanco" },
        { id: 2, name: "Huevo orgánico" },
        { id: 3, name: "Leche deslactosada" },
        { id: 4, name: "Tortillas" },
        { id: 5, name: "Pan integral" },
    ],
    },

];

