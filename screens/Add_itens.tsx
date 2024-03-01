import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';

function Add_itens() {
    return (
        <View style={styles.container}>
            <Header text="Adicione itens" backgroundColor="#FF0000" />
            <Inputs text="Nome do item:" placeholder="Insira o nome do item:"/>
            <Inputs text="Quantidade:" placeholder="Insira a quantidade:"/>
            <Inputs text="Preço:" placeholder="Insira o preço:"/>
            <Botao text="Adicionar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    text : {
        marginBottom: 15,
        marginTop: 40,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: 240,
      },
});

export default Add_itens;