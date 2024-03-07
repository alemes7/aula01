import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Botao from '../components/Botao';
import Inputs from '../components/Inputs';

function Cadastro() {
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
    
    return (
        <View style={styles.container}>
            <Header text="Cadastre-se" backgroundColor="#FF0000" />
            <Inputs text="Nome:" placeholder="Insira seu nome:"/>
            <Inputs text="Sobrenome:" placeholder="Insira seu sobrenome:"/>
            <Inputs text="E-mail:" placeholder="Insira seu email:"/>
            <Inputs text="Telefone:" placeholder="Insira seu telefone:"/>
            <Inputs text="Senha:" placeholder="Insira sua senha:" secureTextEntry/>
            <Inputs text="Confirmar senha:" placeholder="Insira sua senha:" secureTextEntry/>
            <Botao text="Cadastre-se"/>
        </View>
    );
}


export default Cadastro;