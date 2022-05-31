import { StackScreenProps } from '@react-navigation/stack'
import { Icon } from '@rneui/base'
import { Card } from '@rneui/themed'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> { }

const CardCategory = ({ navigation }: Props) => {
    return (

        <Card
        containerStyle={{
            borderRadius:5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}
        >

            <Card.Title style={{ fontSize: 18 }} >Oferta del dia</Card.Title>
            <Card.Divider />
            <TouchableOpacity
                onPress={() => navigation.navigate('Product')}
            >
                <Image
                    style={{ width: "100%", height: 260 }}
                    resizeMode='contain'
                    source={{ uri: 'https://www.truper.com/media/product/f58/juego-de-83-herramientas-1-4-y-3-8-para-mecanico-pretul-d48.jpg' }}
                />
                <Text>Juego de herramientas 83 piezas</Text>
                <View style={{ flexDirection: 'row', marginBottom: 8 }} >
                    <Text>$ 120.00</Text>
                    <Text style={{ color: '#0059FF', fontSize: 10 }} > 10% Off </Text>
                </View>

            </TouchableOpacity>

            <Card.Divider />
            <TouchableOpacity
                onPress={() => navigation.navigate('Ofertas')}
            >
                <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }} >
                    <Text style={{color:'#0059FF'}}  >Ver todas las ofertas</Text>
                    <Icon

                        type="ionicon"
                        name="chevron-forward-outline"
                        color="#0059FF"
                        onPress={() => console.log()} />
                </View>
            </TouchableOpacity>

        </Card>


    )
}

export default CardCategory
