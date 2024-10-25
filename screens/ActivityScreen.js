import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';  // Используем прогресс бар из библиотеки
import Icon from 'react-native-vector-icons/Ionicons';

export default function ActivityScreen() {
  const workoutProgress = 0.75; // 75% прогресс тренировки

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          source={{ uri: 'https://example.com/avatar.jpg' }}
          containerStyle={styles.avatar}
        />
        <Text style={styles.greetingText}>
          Hope you are great Anne, Let’s workout to get some gains!
        </Text>
      </View>

      {/* Круговой прогресс выполнения тренировки */}
      <View style={styles.progressContainer}>
        <Progress.Circle
          size={150}
          progress={workoutProgress} // Прогресс тренировки 75%
          showsText={true}
          color={'rgb(134, 65, 244)'}
          thickness={8}
          formatText={() => `${workoutProgress * 100}%`}  // Отображаем прогресс как процент
        />
        <Text style={styles.progressSubText}>Today's Workout Completed</Text>
      </View>

      {/* Статистика */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="barbell" size={24} color="#fff" />
          <Text style={styles.statText}>146 Completed Workouts Plans</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="time" size={24} color="#fff" />
          <Text style={styles.statText}>45:00 Average Workout Time</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 15,
  },
  greetingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  progressSubText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
  statsContainer: {
    marginTop: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  statText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
});
