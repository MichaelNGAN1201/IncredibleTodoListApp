import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const appName = "Your App Name";
  const yourName = "Your Name"; 
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View>
        <Text>This is the About Screen</Text>
        <Text>App Name: {appName}</Text>
        <Text>Your Name: {yourName}</Text>
        <Text>Current Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;

