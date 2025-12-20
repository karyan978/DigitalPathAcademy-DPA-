import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // यह लाइन जोड़ें
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    // पूरे ऐप को NavigationContainer से रैप करें
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}