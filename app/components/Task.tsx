import { ITask } from '@/types/Task';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TaskProps extends ITask {}

export default function Task({ text, isCompleted }: TaskProps) {
  return (
    <Text style={styles.task}>
      {isCompleted ? '✅' : '⬜️'} {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  task: {
    fontSize: 16,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
