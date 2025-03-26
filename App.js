import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';
import LocationScreen from './screens/LocationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}