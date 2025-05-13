import { create } from 'zustand';
import { obtenerTareas } from './firebase/tasks';
import { defaultTasks } from 'mock/data';


const useStoreTask = create<StoreTasks>((set) => ({
    totalTask: 0,
    totalCompleteTasks: 0,
    tasks: [],
    loadTaskFromFirebase: async () => {
        try {
            
            const loadData = await obtenerTareas();
            const completeTasks = loadData.filter((task) => task.completed === true);
            const totalCompletadas = completeTasks.length;

            set({ 
                totalTask: loadData.length,
                totalCompleteTasks: totalCompletadas,
                tasks: loadData,
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
            // set({ numTask: defaultTasks });
        }
    }
}));

export default useStoreTask;