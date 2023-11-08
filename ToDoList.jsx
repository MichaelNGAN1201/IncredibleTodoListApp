import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
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
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
