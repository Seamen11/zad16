// components/GridMenu.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GridMenu = () => {
  const menuItems = [
    { title: 'Daily Workout', color: '#FF5722' },
    { title: 'Programs', color: '#00BCD4' },
    { title: 'Tech. Guides', color: '#FF9800' },
    { title: 'Training Spots', color: '#673AB7' },
  ];

  return (
    <View style={styles.gridContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={[styles.item, { backgroundColor: item.color }]}>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  item: {
    width: '40%',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GridMenu;
