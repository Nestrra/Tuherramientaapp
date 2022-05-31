

import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'


interface Props extends StackScreenProps<any, any> { }

const CartScreen = ({navigation, route}:Props) => {
  return (
    <View style={{flex:1, alignItems:'center'}} >
        <Text style={{fontSize:23, color:'grey', marginTop:43}}>Tu carro esta vacio</Text>
    </View>
  )
}

export default CartScreen
