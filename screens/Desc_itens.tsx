import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Adicionar() {
    alert("Adicionar");
}

function Desc_itens() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        content: {
            backgroundColor: '#FBFBFB',
            height: 550,
        },

        addButtonContainer: {
            position: 'absolute',
            bottom: 20,
            right: 0,
            margin: 20,
            marginBottom: 50,
            height: 60,
        },

    });

    return (
        <View style={styles.container}>
            <Navbar
                icon1={<AntDesign name="arrowleft" size={30} color="white" />}
                icon2={<MaterialIcons name="refresh" size={30} color="white" />}
                text="Descrição do item" colorText='white'
                backgroundColor='#FF0000'
            />
            <View style={styles.content}>
                <Text>Oi</Text>
            </View>
            <View style={styles.addButtonContainer}>
                <MaterialCommunityIcons name="pencil-circle" size={50} color="red" onPress={Adicionar} />
            </View>

            <BottomNav backgroundColor='#FFF' iconColor='#595959' border={1} />
        </View>
    );
}

export default Desc_itens;