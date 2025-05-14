import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import useStoreProduct from 'lib/product.store';

const ShopCar = () => {
  const { totalProducts, products } = useStoreProduct();

  return (
    <SafeAreaView className="h-full bg-blue-strong1">
      <StatusBar barStyle={'light-content'} animated backgroundColor="#1D2730" />
      <View className="p-4">
        <Text className="text-white text-lg mb-4">Total de productos: {totalProducts}</Text>
        {
          products && products.map((product) => (
            <View key={product.id} className="mb-3 bg-white p-3 rounded-lg">
              <Text className="text-base font-bold">{product.name}</Text>
              <Text className="text-sm text-gray-700">Cantidad: {product.quantity}</Text>
            </View>
          ))
        }
      </View>
    </SafeAreaView>
  );
};

export default ShopCar;
