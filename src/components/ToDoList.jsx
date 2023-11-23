import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      {tasks &&
        tasks.map((task, index) => (
          <Pressable key={index} onPress={() => console.log('Task completed:', task)}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ToDoList;
