import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { MDrawer } from './src/navigator/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <MDrawer/>
    </NavigationContainer>
  );
}

