import { useState } from 'react';
import { CAT } from 'constans/product.static';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import useStoreProduct from 'lib/product.store';

const CategoryPage = () => {

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const {saveProductsInShopCar, products} = useStoreProduct();

  const categoryProduct = CAT.find(c => c.categoryId === Number(id));

  const [selectedProducts, setSelectedProducts] = useState<any[]>(products);

  const updateProductQuantity = (product: any, change: number) => {
    setSelectedProducts(prev => {
      const existing = prev.find(p => p.id === product.id);
      let updated;

      if (existing) {
        const newQuantity = Math.max(0, existing.quantity + change);
        if (newQuantity === 0) {
          // eliminar si llega a 0
          updated = prev.filter(p => p.id !== product.id);
        } else {
          updated = prev.map(p => p.id === product.id ? { ...p, quantity: newQuantity } : p);
        }
      } else if (change > 0) {
        updated = [...prev, { ...product, quantity: change }];
      } else {
        updated = prev;
      }


      saveProductsInShopCar(updated);
    //   console.log("🛒 Productos seleccionados:", updated.length);
      return updated;
    });
  };

  return (
    <SafeAreaView className="h-full bg-blue-strong1">
      <StatusBar barStyle={'light-content'} animated backgroundColor="#1D2730" />

      <View>
        <ScrollView className="p-5 mt-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          {categoryProduct?.items.map((product: any) => {
            const selected = selectedProducts.find(p => p.id === product.id);
            const quantity = selected?.quantity || 0;

            return (
              <View key={product.id} className="bg-white p-4 my-2 rounded-lg shadow">
                <Text className="text-lg font-bold mb-2">{product.name}</Text>

                <View className="flex-row items-center justify-between">
                  <TouchableOpacity
                    onPress={() => updateProductQuantity(product, -1)}
                    className="bg-red-500 p-2 rounded"
                  >
                    <Ionicons name="remove" size={20} color="#fff" />
                  </TouchableOpacity>

                  <Text className="text-lg font-bold">{quantity}</Text>

                  <TouchableOpacity
                    onPress={() => updateProductQuantity(product, 1)}
                    className="bg-green-500 p-2 rounded"
                  >
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <TouchableOpacity
          onPress={() => router.push('/shopCar')}
          className="mt-8 bg-green-500 p-4 rounded-lg items-center"
        >
          <Text className="text-white font-bold">Ir al carrito</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CategoryPage;
