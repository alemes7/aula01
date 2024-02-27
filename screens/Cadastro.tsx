import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';


function Cadastro() {
    return (
        <View style={styles.container}>
            <Header text="Cadastre-se" backgroundColor="#FF0000" />
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <Botao text="Cadastre-se"/>
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

export default Cadastro;