import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LevelChip: React.FC<{ value: number | string; style?: ViewStyle }> = ({ value, style }) => {
    return (
        <LinearGradient
          colors={['#3B82F6', '#06B6D4']} // 🔥 Aquí defines tu gradiente (azul -> cian)
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.chipContainer, style]}
        >
            <Text style={styles.chipText}>
                <Text className='color-green-500'>+</Text>
            {value}
            </Text>
        </LinearGradient>
      );
};

const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: '#3B82F6', // azul tipo tailwind blue-500
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 9999,
    borderTopRightRadius: 0,    // lado derecho cuadrado
    borderBottomRightRadius: 0, // lado derecho cuadrado
    minWidth: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    color: 'white',
    fontSize: 10,
    fontFamily: "LilitaOne_400Regular",
  },
});

export default LevelChip;
