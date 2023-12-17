// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Screen One"
        onPress={() => navigation.navigate('SceneOne')}
      />
    </View>
  );
};

export default HomeScreen;
