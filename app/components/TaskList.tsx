import React from 'react';
import { FlatList } from 'react-native';
import { ITask } from '@/types/Task';
import Task from '@/components/Task';

type TaskListProps = {
  tasks: ITask[] | [];
  removeTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  toggleCompleted: (id: string) => void;
};

export default function TaskList({ tasks, removeTask, editTask, toggleCompleted }: TaskListProps) {
  return (
    <FlatList
      data={tasks ?? []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task
          id={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
          removeTask={removeTask}
          editTask={editTask}
          toggleCompleted={toggleCompleted}
        />
      )}
    />
  );
}