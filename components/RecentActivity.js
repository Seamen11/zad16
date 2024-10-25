// components/RecentActivity.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentActivity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      <View style={styles.activityContainer}>
        <Text style={styles.activityText}>Parks visited - 8 this month</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  activityContainer: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  activityText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RecentActivity;
