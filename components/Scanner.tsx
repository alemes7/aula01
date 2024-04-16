import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from './Navbar';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNav from './BottomNav';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

function Scanner() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center'
        },

        img :{
            width: 250,
            height: 250,
        }
    })

    return (
        <>
            <Navbar
                icon1={<AntDesign name="arrowleft" size={30} color="white" />}
                icon2={<MaterialIcons name="refresh" size={30} color="white" />}
                text="Scanner" colorText='white'
                backgroundColor='#FF0000'
            />
            <View style={styles.container}>
                <Image source={require('../../../assets/scanner.png')} style={styles.img}/>
            </View>
            <BottomNav backgroundColor='#FFF' iconColor='#595959' border={1} />
        </>
    );
}

export default Scanner;