import React from 'react';
import { View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation, route }) => {
  const { tasks, addTask, handleTaskInput, newTask } = route.params?.screenOptions || {};

  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <ToDoList tasks={tasks} keyboardShouldPersistTaps="handled" />
        <ToDoForm
          addTask={addTask}
          handleTaskInput={handleTaskInput}
          newTask={newTask}
        />
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
