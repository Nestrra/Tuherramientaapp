import React from 'react'
import { Text, View } from 'react-native'

const FavoritesScreen = () => {
  return (
    <View style={{flex:1, alignItems:'center'}} >
        <Text style={{fontSize:23, color:'grey', marginTop:43}}>Aun no tienes favoritos</Text>
    </View>
  )
}

export default FavoritesScreen
