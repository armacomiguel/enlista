import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultPlayerData, defaultTasks } from 'mock/data';

// Guardar todos los datos del usuario en NOMBRE: playerData.
export const savePlayerData = async (playerData: any) => {
  try {
    const jsonValue = JSON.stringify(playerData);
    await AsyncStorage.setItem('playerData', jsonValue);
    console.log('Datos guardados');
  } catch (e) {
    console.error('[action.ts][savePlayerData]Mensaje: Error al guardar la información del usuario. ', e);
  }
};

// Nombre: playerData | Cargar todos los datos guardados del usuario [xp, tasks, lvl, lives, streak ]
export const loadPlayerData = async ():Promise<PlayerDataProps | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('playerData');
    if(jsonValue) {
      return jsonValue != null ? JSON.parse(jsonValue) as PlayerDataProps : null;
    } else {
      console.log("Se crea nueva defaultPlayerData.");
      await AsyncStorage.setItem('playerData', JSON.stringify(defaultPlayerData));
      return defaultPlayerData;
    }
  } catch (e) {
    console.error('Error al leer', e);
    return null;
  }
};

//SOLO va a Cargar o crear las  Tareas por default. Nombre: tasks
export const loadTasks = async () => {
  const storedTasks = await AsyncStorage.getItem('tasks');
  if (storedTasks) {
    // console.log("Si existe la data local: ", storedTasks);
    return JSON.parse(storedTasks);
  } else {
    console.log("Se crea nueva defaultTasksData.");
    await AsyncStorage.setItem('tasks', JSON.stringify(defaultTasks));
    return defaultTasks;
  }
};

export const clearLocalData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('✅ Datos locales borrados exitosamente.');
  } catch (error) {
    console.error('❌ Error al borrar los datos locales:', error);
  }
};
