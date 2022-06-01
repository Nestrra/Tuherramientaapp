
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Product from '../screens/home/Product';

import { TopTabNavigation } from './TopTabNavigation';
import Ofertas from '../screens/ofertas/Ofertas';

const Stack = createStackNavigator();

export const Navigator = ()=> {
  return (
    <Stack.Navigator
    initialRouteName='Home'
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
      <Stack.Screen name="Ofertas" component={Ofertas} />
    </Stack.Navigator>
  );
}

