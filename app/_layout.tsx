import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const _layout = () => {

  const [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Aquí podrías meter un ActivityIndicator si quieres feedback visual
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="splashScreen" options={{ headerShown: false }} />
        <Stack.Screen name="screens/AddTask" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
   </View>
  )
}

export default _layout;