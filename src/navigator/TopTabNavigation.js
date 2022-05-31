
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CartScreen from '../screens/cart/CartScreen';
import FavoritesScreen from '../screens/cart/FavoritesScreen';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation=()=> {
  return (

    <>
        <Header   />       
     <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#F9D923' },
            }}
     >  
      <Tab.Screen name="CartScreen" options={{title:'Carrito'}} component={CartScreen} />
      <Tab.Screen name="FavoritesScreen" options={{title:'Favoritos'}}  component={FavoritesScreen} />
    </Tab.Navigator>
    </>

   
  );
}