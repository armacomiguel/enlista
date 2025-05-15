import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

interface PanelProps {
  slideAnim: Animated.Value;
  togglePanel: () => void;
}

const Panel = ({ slideAnim, togglePanel }: PanelProps) => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#fff',
        padding: 12,
        elevation: 5,
        transform: [{ translateY: slideAnim }],
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        zIndex: 10,
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>Agregar producto</Text>

    </Animated.View>
  );
};

export default Panel;
