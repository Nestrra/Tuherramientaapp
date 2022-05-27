import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native';

const Carrusels = () => {
    return (
        <View style={{
            width
                : '100%', height: 210, 
        }} >

            <ScrollView
                horizontal={true}
            >
                <View style={{ height: 200, width: 380,  borderRadius: 8, padding:8 }} >
                    <Image
                        source={{ uri: 'https://www.truper.com/media/import/imagenes/NL-20.jpg' }}
                        style={{
                            height:190, borderRadius: 8,
                            overflow: 'hidden',
                        }}

                    />

                </View>
                <View style={{ height: 200, width: 380, backgroundColor: 'yellow', borderRadius: 8 }} ></View>


            </ScrollView>

        </View>
    )
}

export default Carrusels


