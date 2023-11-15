import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
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
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm
        addTask={addTask}
        handleTaskInput={handleTaskInput}
        newTask={newTask}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
