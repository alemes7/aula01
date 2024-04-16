import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';
import Botao from '../../components/Botao';
import Inputs from '../../components/Inputs';
import LinkBtn from '../../components/Botao';


function RecSenha() {
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
            <Header text="Recuperação de senha" backgroundColor="#011E83" />
            <Text style={styles.text}>Insira seu Email para recuperar a senha!</Text>
            <Inputs text="Email:" placeholder="Insira seu email:"/>
            <LinkBtn text="Cadastre-se" href="./app/index.tsx"/>
        </View>
    );
}

export default RecSenha;