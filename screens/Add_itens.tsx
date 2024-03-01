import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';
import Navbar from '../components/Navbar';
import BlocoCad from '../components/BlocoCad';

function Add_itens() {
    return (
        <View>
            <Navbar icon1="arrow back" icon2="add circle outline"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        marginBottom: 15,
        marginTop: 40,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: 240,
    },
});

export default Add_itens;