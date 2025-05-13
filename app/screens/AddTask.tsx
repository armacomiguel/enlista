import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import FormTask from 'components/forms/FormTask';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const AddTask = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full bg-blue-strong1">
      <ScrollView className="p-5 mt-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white text-2xl font-bold mt-4 mb-6">Agregar nueva tarea</Text>
        <FormTask />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTask;
