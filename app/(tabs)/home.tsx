import { View, SafeAreaView, StatusBar,  } from 'react-native';
import React, { useEffect } from 'react';
import Counter from 'components/Counter';
import useStoreTask from 'lib/task.store';

const Home = () => {

  const {loadTaskFromFirebase, totalTask, totalCompleteTasks} = useStoreTask();

  useEffect(() => {
    loadTaskFromFirebase();
  }, []);
  
  return (
    <SafeAreaView className='h-full bg-blue-strong1'>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor="#1D2730" />
      <View className='flex-row flex-wrap gap-4 items-center mt-11 justify-evenly'>
        <Counter desc="Tareas completadas" quiantity={totalCompleteTasks} type={2}/>
        <Counter desc="Total de tareas" quiantity={totalTask} type={1}/>
        <Counter desc="Tareas completadas" quiantity={totalCompleteTasks} type={2}/>
        <Counter desc="Total de tareas" quiantity={totalTask} type={1}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
