import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask && !tasks.includes(newTask)) {
      const updatedTasks = [...tasks, newTask];
      console.log("Updated tasks:", updatedTasks);
      setTasks(updatedTasks);
      setNewTask('');
    } else {
      Alert.alert('Duplicate Task', 'Please enter a unique task.', [{ text: 'OK' }]);
    }
  };

  const handleTaskInput = (text) => {
    setNewTask(text);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            screenOptions: {
              tasks,
              addTask,
              handleTaskInput,
              newTask,
            },
          }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
