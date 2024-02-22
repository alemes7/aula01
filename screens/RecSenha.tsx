import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';


function RecSenha() {
    return (
        <View style={styles.container}>
            <Header />
            <Inputs />
            <Botao />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});  

export default RecSenha;