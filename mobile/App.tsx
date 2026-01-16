import React from 'react';


import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import BooksearchScreen from './src/screens/BooksearchSceen';
import LoginScreen from './src/screens/LoginScreen';
import SignUPScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SignUPScreen />
    </SafeAreaProvider>
  );
}