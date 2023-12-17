// MyStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SceneOne from '../screens/SceneOne/SceneOne';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SceneOne" component={SceneOne} />
    </Stack.Navigator>
  );
};

export default MyStack;
