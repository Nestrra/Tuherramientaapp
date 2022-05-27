import React from 'react'
import {  Image } from "react-native"


const CarouselCardItem = ({ item}) => {
  return (
   
        <Image
        source={{ uri: item.imgUrl }}
        style={{width:'100%', height:180, borderRadius: 8,
        overflow: 'hidden',}}
       
      />
    
      
    
    
  )
}



export default CarouselCardItem