import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#118dff',
        tabBarInactiveTintColor: '#222',
        tabBarInactiveBackgroundColor: '#fff',
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Todo' }} />
    </Tabs>
  );
}
