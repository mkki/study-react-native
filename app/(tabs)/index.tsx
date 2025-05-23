import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TaskList from '@/components/TaskList';
import { ITask } from '@/types/Task';
import UUID from 'react-native-uuid';

export default function TodoScreen() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addTask = (): void => {
    if (task.trim()) {
      setTasks([...tasks, { id: UUID.v4(), text: task, isCompleted: false }]);
      setTask('');
    }
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, text: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  const toggleCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="할 일을 입력하세요"
          value={task}
          onChangeText={(task) => setTask(task)}
        />
        <Button title="추가" onPress={addTask} />
      </View>

      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        editTask={editTask}
        toggleCompleted={toggleCompleted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
  },
});
