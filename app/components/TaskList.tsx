import React from 'react';
import { FlatList } from 'react-native';
import { ITask } from '@/types/Task';
import Task from '@/components/Task';

type TaskListProps = {
  tasks?: ITask[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <FlatList
      data={tasks ?? []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task
          id={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
        />
      )}
    />
  );
}