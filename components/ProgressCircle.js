// components/ProgressCircle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Circle } from 'react-native-progress';  // используем библиотеку react-native-progress

const ProgressCircle = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <Circle
        size={120}
        progress={percentage / 100}
        showsText={true}
        formatText={() => `${percentage}%`}
        color="#4CAF50"
      />
      <Text style={styles.text}>Today's Workout Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProgressCircle;
