import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  getListById,
  subscribeToProducts,
  updateProductQuantity,
  deleteProduct
} from 'lib/firebase/listSuper';

const ListDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [listName, setListName] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchList = async () => {
      const list = await getListById(id);
      if (!list) {
        setListName('No encontrada');
        return;
      }
      setListName(list.nameList);
    };

    const unsubscribe = subscribeToProducts(id, (newProducts) => {
        // console.log("newProducts:", newProducts);
      setProducts(newProducts);
      setLoading(false);
    });

    fetchList();

    return () => unsubscribe();
  }, [id]);

  const handleRemoveProduct = (productId: string) => {
    Alert.alert('Eliminar', '¿Deseas eliminar este producto?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => deleteProduct(id, productId),
      },
    ]);
  };

  const handleQuantityChange = (productId: string, delta: number) => {
    updateProductQuantity(id, productId, delta);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text className="text-xl font-bold mb-2">{listName}</Text>
      <Text className="text-gray-600 mb-4">{products.length} productos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded mb-2">
            <View className="flex-1">
              <Text className="font-semibold">{item.productName}</Text>
              <View className="flex-row items-center mt-1">
                <TouchableOpacity
                  onPress={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                  className={`p-1 rounded mr-2 ${item.quantity > 1 ? 'bg-gray-300' : 'bg-gray-100 opacity-50'}`}
                >
                  <Ionicons name="remove" size={18} color={item.quantity > 1 ? 'black' : 'gray'} />
                </TouchableOpacity>

                <Text className="mx-2">{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() => handleQuantityChange(item.id, 1)}
                  className="p-1 rounded bg-gray-300 ml-2"
                >
                  <Ionicons name="add" size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => handleRemoveProduct(item.id)}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push(`/screens/list/${id}/add-product`)}
        className="bg-blue-500 p-3 rounded mb-4"
      >
        <Text className="text-white text-center">Agregar producto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListDetailScreen;
