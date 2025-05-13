import { View, Text, Alert, Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from 'lib/store';
import images from 'constans/images';

const Record = () => {
  const { lives, streak } = useStore();

  return (
    <SafeAreaView className='w-full' >
      <View className='bg-blue-dark1 p-4 flex-row justify-evenly  border-b-4 border-b-blue-dark2'>

        <View className='flex-row items-center justify-evenly w-28'>
          <Image className="w-8 h-8" source={images.heartImage} resizeMode='contain' width={15} height={15}/>
          <Text className='text-white' style={{fontFamily: "LilitaOne_400Regular", fontSize: 25}}>{streak || 0}</Text>
        </View>

        <View className='flex-row items-center justify-evenly w-28'>
          <Image className="w-8 h-8" source={images.fireImage} resizeMode='cover' width={15} height={15}/>
          <Text className='text-white' style={{fontFamily: "LilitaOne_400Regular", fontSize: 25}}>{lives || 0}</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}


export default Record;