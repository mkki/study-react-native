import { useToggle } from '@/hooks/useToggle';
import { ITask } from '@/types/Task';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';

interface TaskProps extends ITask {
  removeTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  toggleCompleted: (id: string) => void;
}

export default function Task({
  id,
  text,
  isCompleted,
  removeTask,
  editTask,
  toggleCompleted,
}: TaskProps) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const [editedText, setEditedText] = useState(text);

  const handleCheck = () => toggleCompleted(id);
  const handleRemove = () => removeTask(id);
  const handleEditToggle = () => toggleIsEditing();
  const handleSave = () => {
    editTask(id, editedText);
    handleEditToggle();
  };

  return (
    <View style={styles.taskContainer}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.taskInput}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
          />
          <TouchableOpacity style={styles.taskButton}>
            <Button onPress={handleSave} title="저장" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton}>
            <Button onPress={handleEditToggle} title="취소" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Pressable onPress={handleCheck}>
            <Text>{isCompleted ? '✅' : '⬜️'}</Text>
          </Pressable>
          <Text style={styles.task}>{text}</Text>
          <TouchableOpacity style={styles.taskButton}>
            <Button onPress={handleEditToggle} title="수정" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton}>
            <Button onPress={handleRemove} title="삭제" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
  },
  taskInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
  },
  task: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  taskButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#222',
  },
});
