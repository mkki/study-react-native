import { Tabs } from 'expo-router';
import React from 'react';

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
      <Tabs.Screen name="gallary" options={{ title: 'Cats' }} />
    </Tabs>
  );
}
