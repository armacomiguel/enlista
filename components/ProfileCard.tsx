import React from 'react';
import { View, Text, Image } from 'react-native';
import ExpProgressBar from './ExpProgressBar';
import images from 'constans/images';

type ProfileCardProps = {
  level: number;
  exp: number;
  expToUp: number;
};

const ProfileCard = ({ level, exp, expToUp }: ProfileCardProps) => {
  return (
    <View className="bg-white w-11/12 rounded-2xl shadow-lg overflow-hidden">
      {/* Fondo superior con color */}
      <View className="bg-app-main1 h-28" />

      {/* Imagen centrada y superpuesta */}
      <View className="items-center -mt-12">
        <Image
          source={images.profileDefault}
          resizeMode="cover"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </View>

      {/* Información del perfil */}
      <View className="items-center mt-2 mb-4 px-4">
        <Text className="text-xl font-bold text-gray-800">Mikerm</Text>
        <Text className="text-sm text-gray-500 mb-1">Nivel {level || 0}</Text>
        {/* <ExpProgressBar exp={exp} expToUp={expToUp} /> */}
      </View>

      {/* Stats del juego */}
      <View className="flex-row justify-around py-4 border-t border-gray-200">
        <View className="items-center">
          <Text className="text-lg font-semibold text-indigo-600">1520</Text>
          <Text className="text-xs text-gray-500">Monedas</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-indigo-600">12</Text>
          <Text className="text-xs text-gray-500">Logros</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-indigo-600">34</Text>
          <Text className="text-xs text-gray-500">Misiones</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
