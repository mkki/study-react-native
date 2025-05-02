import React from 'react';
import { StyleSheet, View } from 'react-native';
import PhotoList from '@/components/PhotoList';

export default function GallaryScreen() {
  return (
    <View style={styles.container}>
      <PhotoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});