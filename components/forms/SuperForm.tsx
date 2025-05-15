import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import useStoreProduct from 'lib/product.store';

const FormSuperList = () => {
  const { control, handleSubmit, reset } = useForm();
  const { nameList, setNameList, addProduct } = useStoreProduct();

  const onSubmit = (data: any) => {
    if (data.nameList) {
      setNameList(data.nameList);
    }
    if (data.productName && data.quantity) {
      addProduct({ productName: data.productName, quantity: parseInt(data.quantity) });
      reset({ productName: '', quantity: '' }); // Limpiar solo campos de producto
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {!nameList && (
        <>
          <Text className="text-white mb-2">Nombre de la lista:</Text>
          <Controller
            control={control}
            name="nameList"
            render={({ field: { onChange, value } }) => (
              <TextInput placeholder="Nombre de lista" value={value} onChangeText={onChange} className="bg-white p-2 rounded mb-4"/>
            )}
          />
        </>
      )}

      <Text  className="text-white mb-2">Producto:</Text>
      <Controller
        control={control}
        name="productName"
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Producto" value={value} onChangeText={onChange} className="bg-white p-2 rounded mb-4"/>
        )}
      />

      <Text  className="text-white mb-2">Cantidad:</Text>
      <Controller
        control={control}
        name="quantity"
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Cantidad" value={value} onChangeText={onChange} keyboardType="numeric" className="bg-white p-2 rounded mb-4"/>
        )}
      />

      <Button title="Agregar producto" onPress={handleSubmit(onSubmit)} />

      <Text  className="text-white mb-2">Productos en la lista:</Text>
      {useStoreProduct.getState().products.map((item, index) => (
        <Text key={index}>{item.productName} - {item.quantity}</Text>
      ))}
    </View>
  );
}

export default FormSuperList;
