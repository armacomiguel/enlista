// export const defaultTasks = [
//   {
//     id: 1,
//     name: 'Comer',
//     completed: false,
//     category: 'exp',
//     type: 'daily',
//     cooldownMinutes: 1,            // se reactiva cada 5 horas
//     lastCompleted: 0,         // guarda el timestamp cuando se completó
//   },
//   {
//     id: 2,
//     name: 'Dormir',
//     completed: false,
//     category: 'exp',
//     type: 'daily',
//     cooldownMinutes: 1,           // se reactiva cada día
//     lastCompleted: 0,
//   },
//   {
//     id: 3,
//     name: 'Sacar Basura',
//     completed: false,
//     category: 'exp',
//     type: 'daily',
//     cooldownMinutes: 1,           // se reactiva cada día
//     lastCompleted: 0,
//   },
// ];

export const defaultTasks = [
  {
    id: 1,
    
  }
];

export const defaultPlayerData = {
  level: 1,
  exp: 0,
  expToUp: 20,
  lives: 100,
  streak: 0,
  tasks: defaultTasks
};


export const mockTasks = [
  { id: 1, name: 'Comer', completed: false, category: "exp",  type: "daily" },
  { id: 2, name: 'Dormir', completed: false, category: "exp",  type: "daily" },
  { id: 3, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 4, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 5, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 6, name: 'Sacar Basura', completed: false, category: "exp",  type: "week" },
  { id: 7, name: 'Sacar Basura', completed: false, category: "life",  type: "week" },
  { id: 8, name: 'Sacar Basura', completed: false, category: "life",  type: "week" },
  { id: 9, name: 'Sacar Basura', completed: false, category: "energy",  type: "special" },
  { id: 10, name: 'Sacar Basura', completed: false, category: "energy",  type: "special" },
];

export const mockTasksTiempo =
[
  {
    id: 1,
    name: 'Comer',
    completed: false,
    category: 'exp',
    type: 'daily',
    lastCompletedAt: null,
    cooldown: 5 * 60 * 60 * 1000 // 5 horas en ms
  }
];