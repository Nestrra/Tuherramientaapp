import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerNavigationOptions } from '@react-navigation/drawer';
import { Navigator } from './Navigator';
import Notification from '../screens/notifications/Notification';
import { Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';

const Drawer = createDrawerNavigator();

export const MDrawer =()=> {
  return (
    <Drawer.Navigator
    
    screenOptions={{
      headerShown:false,
    }}
    drawerContent={(props)=> <MenuDrawer {...props} />}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}}  component={Navigator} />
      <Drawer.Screen name="Notification" options={{title:'Notificaciones'}} component={Notification} />
    </Drawer.Navigator>
  );
}

const MenuDrawer =({navigation}: DrawerContentComponentProps )=>{

  return (

    <DrawerContentScrollView>
        <View style={{   backgroundColor:'#F9D923', width:'100%', height:230, marginTop:-60, paddingTop:80, paddingLeft:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
             <Avatar
             size={58}
             rounded
             icon={{ name: 'person-add-outline', type: 'ionicon', color: 'grey' }}
             containerStyle={{
                 backgroundColor: '#F9D923',
                borderWidth:0.5,
                borderColor:'grey'
             }}

          />
          <Text style={{color: 'grey', marginLeft:6}} >Hola Nestor Raul Camacho</Text>
          </View>

        </View>
        
        <View style={{marginVertical:20, marginHorizontal:10}} >
          <TouchableOpacity
          style={{marginVertical:10, flexDirection:'row', alignItems:'center'}}
              onPress={()=>navigation.navigate('Home')}
          >
              <Icon type="ionicon" name="home-outline" color="black" size={19} />
            <Text style={{fontSize:15, marginLeft:4}}>Home</Text>
          
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginVertical:10, flexDirection:'row', alignItems:'center'}}
              onPress={()=>navigation.navigate('Notification')}
          >
             <Icon type="ionicon" name="notifications-outline" color="black" size={19} />
            <Text style={{fontSize:15,  marginLeft:4}}>Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginVertical:10, flexDirection:'row', alignItems:'center'}}
              onPress={()=>navigation.navigate('Notification')}
          >
             <Icon type="ionicon" name="briefcase-outline" color="black" size={19} />
            <Text style={{fontSize:15,  marginLeft:4}}>Mis compras</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginVertical:10, flexDirection:'row', alignItems:'center'}}
              onPress={()=>navigation.navigate('Notification')}
          >
             <Icon type="ionicon" name="heart-outline" color="black" size={21} />
            <Text style={{fontSize:15,  marginLeft:4}}>Favoritos</Text>
          </TouchableOpacity>
        </View>

    </DrawerContentScrollView>

  )

}

