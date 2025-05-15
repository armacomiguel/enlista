import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { subscribeToLists, deleteList } from 'lib/firebase/listSuper';

const Super = () => {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToLists(setLists);
    return () => unsubscribe();
  }, []);

  const confirmDelete = (id: string) => {
    Alert.alert(
      'Eliminar lista',
      '¿Estás seguro que deseas eliminar esta lista?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteList(id);
            } catch (error) {
              console.error('Error eliminando lista:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Mis listas</Text>

      <FlatList
        data={lists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded mb-2">
            <TouchableOpacity
              className="flex-1"
              onPress={() =>
                router.push({ pathname: '/screens/list/[id]', params: { id: item.id } })
              }
            >
              <Text className="text-lg font-semibold">{item.nameList}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push('/screens/list/create')}
        className="mt-6 bg-blue-500 p-4 rounded"
      >
        <Text className="text-white text-center">Crear nueva lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Super;
