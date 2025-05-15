import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { addProductToListInFirebase } from 'lib/firebase/listSuper';

const AddProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = async () => {
    if (!productName.trim() || !quantity.trim()) {
      Alert.alert('Error', 'Nombre y cantidad son requeridos.');
      return;
    }

    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Error', 'Cantidad debe ser un número válido mayor a 0.');
      return;
    }

    try {
      // console.log(id, productName, quantity);
      await addProductToListInFirebase(id, {
        productName,
        quantity: parsedQuantity,
        
      });
      router.back(); // Regresa al detalle de la lista
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo agregar el producto.');
    }
  };

  if (!id) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">ID de lista no válido</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Agregar producto</Text>

      <Text className="mb-2">Nombre del producto:</Text>
      <TextInput
        value={productName}
        onChangeText={setProductName}
        placeholder="Ej. Manzanas"
        className="border border-gray-300 p-3 rounded mb-4"
      />

      <Text className="mb-2">Cantidad:</Text>
      <TextInput
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Ej. 2"
        keyboardType="numeric"
        className="border border-gray-300 p-3 rounded mb-4"
      />

      <TouchableOpacity onPress={handleAdd} className="bg-green-500 p-4 rounded">
        <Text className="text-white text-center">Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProductScreen;
