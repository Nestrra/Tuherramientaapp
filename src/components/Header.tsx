

import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header as HeaderRNE, Input } from "@rneui/themed";
import { Icon } from '@rneui/base';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { 

    title?:string;
    iconTitle?: JSX.Element;
    iconTitleRigth?:JSX.Element;
    cartIcon?:JSX.Element;

}

const Header = ({navigation, title, iconTitle, iconTitleRigth, cartIcon}:Props) => {


    const [input, setInput] = useState<string>('');


    return (
        < >
            <HeaderRNE
                
                backgroundColor='#F9D923'
                leftComponent={
                    <TouchableOpacity

                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon type="ionicon" name="menu-outline" color="black" size={33} />
                    </TouchableOpacity>
                }
                rightComponent={

                    <TouchableOpacity
                        style={{ marginTop: 1 }}
                        onPress={() => navigation.navigate('TopTabNavigation')}
                    >
                       {cartIcon}
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
                            {iconTitle}
                            <Text style={{ fontSize: 13 }} >{title}</Text>
                           {iconTitleRigth}

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
