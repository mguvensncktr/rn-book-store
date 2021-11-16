import React from 'react';
import { useFonts } from 'expo-font';
import Router from './navigation/Router';

export default function App() {

  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <Router />
  );
}

