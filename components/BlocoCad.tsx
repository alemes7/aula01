import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type BlocoProps = {
    text: string;
};

function Bloco({ text }: BlocoProps) {
    return (
        <View style={[styles.container]}>
            <Text style={styles.numero}>956389</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin:8,
        display: "flex",
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5"
    },
    text: {
        fontSize: 18,
        color: '#595959',
        marginLeft: 10,
        marginBottom: 10,
    },

    numero: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
    }

});

export default Bloco;
