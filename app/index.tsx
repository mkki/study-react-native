import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TaskList from '@/components/TaskList';
import { ITask } from '@/types/Task';

export default function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const generateId = () =>
    `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

  const addTask = (): void => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: generateId(), text: task, isCompleted: false },
      ]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="할 일을 입력하세요"
          value={task}
          onChangeText={setTask}
        />
        <Button title="추가" onPress={addTask} />
      </View>

      <TaskList tasks={tasks} />
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
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
  },
});
