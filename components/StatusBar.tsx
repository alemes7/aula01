import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Props = {
    title: string;
};

export default function Status({ title }: Props) {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            height: 200,
        },
        image: {
            resizeMode: 'contain',
            width: 200,
            height: 100,
        },
        texto: {
            color: 'white',
            fontSize: 20,
            
        },
    });

    return (
        <View style={styles.container}>
            <Image source={require('@assets/logo-senai.png')} style={styles.image} />
            <StatusBar style="light" backgroundColor="#333" />
            <Text style={styles.texto}>{title}</Text>
        </View>
    );
};


