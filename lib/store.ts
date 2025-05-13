import { create } from 'zustand';
import { loadPlayerData, savePlayerData } from 'lib/action';
import { defaultTasks } from 'mock/data';

const useStore = create<StoreTasks>((set) => ({
  level: 1,
  exp: 0,
  expToUp: 20,
  lives: 100,
  streak: 0,
  tasks: defaultTasks,

  // ✅ Nueva acción para cargar y setear tareas desde afuera
  setTasks: (tasks:any) => set({ tasks }),
  resetTask: (taskId) => {
    set((state) => {
      const resetTasks = state.tasks.map(task => {
        if (task.id === taskId) {
          if (task.completed && task.lastCompleted > 0) {
            return {
              ...task,
              completed: false,
              lastCompleted: 0,
            };
          }
        }
        return task; // ✅ devolver el task original si no lo estamos modificando
      });
  
      return {
        tasks: resetTasks,
      };
    });
  },

  // ✅ Función para cargar desde el storage (puedes llamar esta al iniciar)
  loadAndSetDataPlayer: async () => {
    try {
      const loadedPlayerData = await loadPlayerData();
      // console.log("DATA CARGADA: ", loadedPlayerData);
      set(
        { 
          level: loadedPlayerData?.level,
          exp: loadedPlayerData?.exp,
          expToUp: loadedPlayerData?.expToUp,
          lives: loadedPlayerData?.lives,
          streak: loadedPlayerData?.streak,
          tasks: loadedPlayerData?.tasks,
        }
      );
    } catch (error) {
      console.error('Error loading tasks:', error);
      set({ tasks: defaultTasks }); // fallback si falla
    }
  },

  // ✅ Mantengo tu lógica de completar tareas con tiempo/cooldown
  completeTask: (taskId) => {
  let dataUser;  // variable para capturar el nuevo estado
  
  set((state) => {

    const now = Date.now();

    const updatedTasks = state.tasks.map(task => {
      if (task.id === taskId) {
        if (task.completed) {
          const nextAvailable = new Date(task.lastCompleted).getTime() + (task.cooldownMinutes * 60000);
          if (now < nextAvailable) {
            return task; // todavía en cooldown, no tocar
          }
        }

        return {
          ...task,
          completed: true,
          lastCompleted: now,
        };
      }
      return task;
    });

    // Ganancia de experiencia base
    let xpGained = state.exp + 30;
    let newLevel = state.level;
    let newExpToUp = state.expToUp;

    // Revisar si ya pasamos el umbral
    if (xpGained >= state.expToUp) {

      newLevel += 1;

      // Opcional: guardar el sobrante
      const leftoverExp = xpGained - state.expToUp;

      newExpToUp += 10;

      // Resetear exp o guardar sobrante
      xpGained = leftoverExp; // Si quieres guardar sobrante
      // xpGained = 0;        // Si prefieres reiniciar a cero siempre
    }

    // Guardamos el nuevo estado
    dataUser = {
      level: newLevel,
      exp: xpGained,
      expToUp: newExpToUp,
      lives: 100, // Esto parece fijo, ¿quieres que también evolucione?
      streak: state.streak + 1,
      tasks: updatedTasks,
    };

    return dataUser; // lo devolvemos al store
  });

  // ⚠️ IMPORTANTE: fuera del set, usamos el estado que acabamos de construir
  savePlayerData(dataUser).catch(err => console.error('Error saving data:', err));
  }
}));

export default useStore;
