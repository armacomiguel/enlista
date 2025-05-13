import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import ExpProgressBar from './ExpProgressBar';
import images from 'constans/images';

const LevelContainer = () => {
  return (
    <View className='mt-3 bg-app-main1 w-[90%] p-2 rounded-xl shadow-lg overflow-hidden border-b-[9px] border-app-main2'>
      <View className='w-full flex-row items-center justify-around'>
        <Image source={images.starImage} className="w-12 h-12"/>
        <View>
            {/* <Text>Nivel: 10</Text> */}
            <ExpProgressBar exp={10} expToUp={20}/>
        </View>
      </View>
    </View>
  )
}

export default LevelContainer;