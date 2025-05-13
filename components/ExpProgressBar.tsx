import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import useStore from '../lib/store';

const ExpProgressBar = ({exp, expToUp}: ExpBarProps) => {

  const progress = (exp % expToUp) / expToUp; // Si cada nivel es cada ${expToUp} XP

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{exp % expToUp} / {expToUp} Exp</Text> */}
      <Progress.Bar 
        progress={progress}
        borderWidth={1.5}
        width={250}
        height={10}
        borderColor='white' 
        color="#35758A" 
        animated={true} 
        borderRadius={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: "white",
    marginBottom: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ExpProgressBar;
