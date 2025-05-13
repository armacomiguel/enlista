import { Button } from 'react-native';
import '../global.css';
import {Text, View } from 'react-native';
import { router } from 'expo-router';


export default function App() {

  return (
    <>
      <View>
          <Button onPress={() => router.push("/home")} title='Para el home' />
          <Text className='bg-blue-500'>Hola</Text>
      </View>
    </>
  );
}
