import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Button, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { obtenerTareas, actualizarTarea } from 'lib/firebase/tasks';
import Collapsible from 'react-native-collapsible';
import { formatearFechaLegible } from 'lib/utils';
import useStoreTask from 'lib/task.store';

const Tasks = () => {

  const [refreshing, setRefreshing] = useState(false);
  const {tasks, loadTaskFromFirebase} = useStoreTask();

  const completarTarea = (id:string) => {
    actualizarTarea(id);
  }

   const Divider = () => (
    <View style={{
      height: 3,
      backgroundColor: '#1B242C',
      marginVertical: 16,
      width: '95%',
    }} />
  );

  const tareasIncompletas = tasks
    .filter((t) => !t.completed)
    .sort((a, b) => b.createdAt?.toDate() - a.createdAt?.toDate());

  const tareasCompletadas = tasks
    .filter((t) => t.completed)
    .sort((a, b) => b.createdAt?.toDate() - a.createdAt?.toDate());

  const TaskItem = ({ item }: { item: any }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
      <View className={`mb-3 ${!item.completed ? "bg-yellow-strong1" : "bg-[#0daf64]"} p-3 rounded-lg shadow w-full`}>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} className='flex-row justify-between'>
          <View>
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className='font-light color-green-950'>{formatearFechaLegible(item.createdAt.toDate(), true)}</Text>
          </View>
          <View>
            <Ionicons name="bookmark" size={24} color="#0daf64" />
          </View>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed}>
          <View className={`${!item.completed ? "bg-yellow-strong2" : "bg-[#0e9e5b]"} p-3 rounded-lg mt-5`}>
            {/* <Text className="mt-2">📅 Fecha: {item.createdAt?.toDate().toLocaleDateString()}</Text> */}
            
            <Text>🏷️ Categoría: {item.category}</Text>
            <Text>🏷️ Descripción: {item.desc}</Text>
            <Text>🏷️ Fase: {item.step}</Text>
          </View>
          {!item.completed && (
            <View className="mt-10 p-1">
              <Button title="Terminar" onPress={() => completarTarea(item.id)} />
            </View>
          )}
        </Collapsible>
      </View>
    );
  };

  return (
    <SafeAreaView className="h-full bg-blue-strong1 relative">
      <ScrollView className="p-2 mt-10 flexborder" contentContainerStyle={{
          alignItems: 'center', 
          // justifyContent: 'center', 
        }}
      >
        <View className='flex items-center justify-center w-[95%]'>
          { tareasIncompletas.length > 0 ? ( tareasIncompletas.map((item) => (
            <TaskItem key={item.id} item={item} />
          ))) : 
            (
              <View className='mt-10 flex items-center'>
                <Text className='h-20 font-bold color-gray-500'>Aun no tienes pendientes</Text>
              </View>
            )
          }
        </View>

        <Divider />

        <View className='flex items-center justify-center w-[95%]'>
          {tareasCompletadas.length > 0 ? (
              tareasCompletadas.map((item) => (
              <TaskItem key={item.id} item={item} />
            ))
            ) : (
              <View className='mt-10 flex items-center'>
                  <Text className='h-20 font-bold color-gray-500'>Aun no tienes pendientes listos</Text>
                </View>
            )
          } 
      </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push('screens/AddTask')}
        className="absolute bottom-6 right-6 bg-[#0daf64] p-4 rounded-full shadow-lg border-2 border-white"
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Tasks;
