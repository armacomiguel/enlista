import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/home');
    }, 1200);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'LilitaOne_400Regular', fontSize: 60, color:"white" }}>
        Enlista
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EB2D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
});
