import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type NavbarProps = {
    title: string;
    texto: string;
    backgroundColor: string;
    colorText: string;
}

function Texto_Desc ({title, texto} :NavbarProps) {
    const styles = StyleSheet.create({

        container: {
            display: "flex",
            alignItems: "center",
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#F5F5F5",
            
        },
    })

    return (
        <View style={styles.container}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
            <Text style={{color: 'black', fontSize: 20}}>{texto}</Text>
        </View>
    );
}

export default Texto_Desc;