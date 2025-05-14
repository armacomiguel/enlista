import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';
import images from 'constans/images';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { router } from 'expo-router';

interface CounterProps {
    id: number;
    title: string;
    type: number;
}

const CategoryShop = ({id, title, type}:CounterProps) => {

  const bgColor = useMemo(() => {
    switch (type) {
      case 1:
        return "bg-red-strong";
      case 2:
        return "bg-[#0daf64]";
      case 3:
        return "bg-red-400";
      default:
        return "bg-app-main1";
    }
  }, [type]);

  const iconColor = useMemo(() => {
  switch (type) {
    case 1: return "#E04444"; // rojo
    case 2: return "#0e9e5b"; // verde
    case 3: return "#F87171"; // xxx
    default: return "#7BC5DD";
  }

}, [type]);

  const textColor = useMemo(() => {
  switch (type) {
    case 1: return "color-red-900"; // rojo
    case 2: return "color-green-900"; // verde
  }

}, [type]);

 const iconName = useMemo(() => {
  switch (type) {
    case 1: return "layers-sharp"; // rojo
    case 2: return "checkmark-circle-outline"; // verde
  }

}, [type]);
  
  return (
    <TouchableOpacity onPress={() => router.push({pathname: `/screens/shopCategory/${id}`})}
        className={`mt-3 ${bgColor} w-[45%] p-3 rounded-md overflow-hidden`}>
        <View className='w-full flex-col items-start'>
            <View className='h-[10vh] overflow-hidden'>
            <Text  style={{fontSize: 25, color: "white" }} className='mb-1 font-bold'>{title}</Text>
            {/* <Text  style={{ fontFamily: 'LilitaOne_400Regular', fontSize: 18, }} className={textColor}>{title}</Text> */}
            </View>
            <View className='relative w-full'>
            {/* <Image source={images.checkImage} className="w-[12vh] h-[12vh] left-20 -bottom-8"/> */}
            <Ionicons name={iconName} size={70} color={iconColor} className='absolute -right-8 -bottom-8'/>
            <Ionicons name={iconName} size={70} color={iconColor} className='absolute -right-8 -bottom-8'/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryShop;