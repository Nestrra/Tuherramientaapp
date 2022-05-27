import { StackScreenProps } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../components/Header'
import data from '../../data'
import { itemWidth, sliderWidth } from '../../components/ffff'
import CarouselCardItem from '../../components/CarrouselItems'
import Carrusel from '../../components/Carrusel'
import Carrusels from '../../components/Carrusel'

interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ navigation }: Props) => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <Header />

            <ScrollView >
            <LinearGradient
                // Background Linear Gradient
                colors={['#F9D923', 'white']}
                style={styless.background}
            />

       <Carrusels/>

{/* <View style={{marginTop:-80}}>
<Carousel   
                    
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideShift={0}
                    useScrollView={true}
                
            />

</View> */}
           
        

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
        height: 90,
    },


})


