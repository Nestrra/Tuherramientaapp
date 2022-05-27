
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Product from '../screens/home/Product';

const Stack = createStackNavigator();

export const Navigator = ()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
            
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

