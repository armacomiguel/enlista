import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { createList } from 'lib/firebase/listSuper'; // Asegúrate de tener esta función
import { FirebaseError } from 'firebase/app';

const CreateListScreen = () => {
  const [nameList, setNameList] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!nameList.trim()) return;

    try {
      setLoading(true);
      await createList(nameList); // Función que guarda en Firebase
      router.push('/(tabs)/super');
    } catch (error) {
      const err = error as FirebaseError;
      Alert.alert('Error', err.message || 'No se pudo crear la lista');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Nueva lista</Text>

      <Text className="mb-2">Nombre de la lista:</Text>
      <TextInput
        value={nameList}
        onChangeText={setNameList}
        placeholder="Ej. Lista del super"
        className="border border-gray-300 p-3 rounded mb-4"
      />

      <TouchableOpacity
        onPress={handleCreate}
        disabled={loading}
        className={`p-4 rounded ${loading ? 'bg-gray-400' : 'bg-green-500'}`}
      >
        <Text className="text-white text-center">
          {loading ? 'Creando...' : 'Crear'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateListScreen;
