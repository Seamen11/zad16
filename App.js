import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScreen from './screens/ActivityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ActivityScreen">
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{ title: 'Activity Tracker' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
