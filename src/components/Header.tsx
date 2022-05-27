

import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header as HeaderRNE, Input } from "@rneui/themed";
import { Icon } from '@rneui/base';

const Header = () => {


    const [input, setInput] = useState<string>('');


    return (
        < >
            <HeaderRNE
                
                backgroundColor='#F9D923'
                leftComponent={
                    <TouchableOpacity

                        onPress={() => console.log('Hola')}
                    >
                        <Icon type="ionicon" name="menu-outline" color="black" size={33} />
                    </TouchableOpacity>
                }
                rightComponent={

                    <TouchableOpacity
                        style={{ marginTop: 1 }}
                        onPress={() => console.log('Hola')}
                    >
                        <Icon type="ionicon" name="cart-outline" color="black" size={28} />
                    </TouchableOpacity>

                }
                centerComponent={
                    <View >
                        <Input
                            placeholder='Buscar'
                            value={input}
                            onChangeText={(text: string) => setInput(text)}
                            leftIcon={

                                <Icon

                                    name={'search-outline'}
                                    type='ionicon'
                                    color='grey'
                                    size={17}
                                    onPress={() => console.log()} />


                            }
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            errorMessage={
                                ''

                            }
                            onSubmitEditing={() => {

                            }}
                        />

                        <TouchableOpacity
                            style={{ flexDirection: 'row', marginLeft: -30, marginTop: -10, alignItems: 'center' }}
                            onPress={() => console.log('ir a direcciones')}
                        >
                            <Icon type="ionicon" name="location-outline" color="black" size={16} />
                            <Text style={{ fontSize: 13 }} >Enviar a Nestor Raul Camacho - Carrera 31 No. 13-41</Text>
                            <Icon style={{ marginLeft: 3 }} type="ionicon" name="chevron-forward-outline" color="grey" size={16} />

                        </TouchableOpacity>

                    </View>

                }

            />



        </>
    )
}

export default Header

const styles = StyleSheet.create({

    inputContainer: {


        paddingLeft: 4,
        borderRadius: 40,
        borderWidth: 1,
        height: 33,
        width: '140%',
        borderColor: 'white',
        backgroundColor: 'white'
    },
    inputStyle: {

        flex: 1,
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
    },


})
