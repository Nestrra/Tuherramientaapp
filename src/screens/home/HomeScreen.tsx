import { StackScreenProps } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import data from '../../data'
import { itemWidth, sliderWidth } from '../../components/ffff'
import CarouselCardItem from '../../components/CarrouselItems'
import { Avatar, Card, Icon } from '@rneui/themed'
import { colors } from '../../styles'
import CardCategory from '../../components/CardCategory'


interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ navigation, route }: Props) => {

    console.log()

    return (
        <View style={{ flex: 1 }} >
            <Header 
                navigation={navigation} 
                route={route} 
                title={'Enviar a Nestor Raul Camacho - Carrera 31 No. 13-41'}
                iconTitle={ <Icon type="ionicon" name="location-outline" color="black" size={16} />}
                iconTitleRigth={ <Icon style={{ marginLeft: 3 }} type="ionicon" name="chevron-forward-outline" color="grey" size={16} />}
                cartIcon={ <Icon type="ionicon" name="cart-outline" color="black" size={28}  />}
                />
            <ScrollView >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#F9D923', '#EDF0FF']}
                    style={styless.background}
                />

                <View style={{ marginTop: -110 }}>
                    <Carousel

                        data={data}
                        renderItem={CarouselCardItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        inactiveSlideShift={0}
                        useScrollView={true}
                    />

                </View>


                <LinearGradient
                    start={[0, 1]} end={[1, 0]}
                    colors={[colors.moradoClaro, colors.morado]}
                    style={styless.background2}
                >
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '600' }} >Productos con el 10% de descuento</Text>
                    <Icon

                        type="ionicon" 
                        name="chevron-forward-outline"
                        color="grey"
                        onPress={() => console.log()} />
                </LinearGradient>



                <Card 
                    containerStyle={{borderRadius:5}}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='truck' type='font-awesome' size={14} color='#4CA83D' />
                        <Text style={{ fontSize: 11, color: '#4CA83D' }} > Envio gratis </Text>
                        <Text style={{ fontSize: 11 }}>en miles de productos desde $250.000</Text>

                    </View>
                </Card>

                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={{ flexDirection: 'column' }}>
                        <Avatar
                            size={58}
                            rounded
                            icon={{ name: 'construct', type: 'ionicon', color: 'grey' }}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                        <Text style={{ color: 'grey', fontSize: 11, marginTop: 4 }} >Electricas</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Avatar
                            size={58}
                            rounded
                            icon={{ name: 'construct', type: 'ionicon', color: 'grey' }}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                        <Text style={{ color: 'grey', fontSize: 11, marginTop: 4 }} >Manuales</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Avatar
                            size={58}
                            rounded
                            icon={{ name: 'construct', type: 'ionicon', color: 'grey' }}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                        <Text style={{ color: 'grey', fontSize: 11, marginTop: 4 }} >De medicion</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Avatar
                            size={58}
                            rounded
                            icon={{ name: 'construct', type: 'ionicon', color: 'grey' }}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                        <Text style={{ color: 'grey', fontSize: 11, marginTop: 4 }} >Inalambricas</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Avatar
                            size={58}
                            rounded
                            icon={{ name: 'construct', type: 'ionicon', color: 'grey' }}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                        <Text style={{ color: 'grey', fontSize: 11, marginTop: 4 }} >Electricas</Text>
                    </View>
                </View>
            <CardCategory navigation={navigation} route={route}                
            />
            </ScrollView>

        </View>

    )
}

export default HomeScreen

const styless = StyleSheet.create({

    background: {

        left: 0,
        right: 0,
        top: 0,
        height: 120,
    },
    background2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 13,
        padding: 10,
        left: 0,
        right: 0,
        top: 0,
        height: 40,
        marginBottom:-8,
        borderRadius:5,
    },


})


