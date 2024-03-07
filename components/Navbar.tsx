import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

type NavbarProps = {
    icon1: any;
    icon2: any;
    text: string;
    backgroundColor: string;
    colorText: string;
}

function Navbar ({icon1, icon2,text, backgroundColor, colorText} :NavbarProps) {
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
    
        text : {
            fontSize: 18,
            color: '#595959',
            alignItems: "center",
        },
    
        icon : {
            margin: 10,
        }
    })

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: backgroundColor}}>
            <StatusBar backgroundColor="dark"/>
            <View style={styles.icon}>{icon1}</View>
            <Text style={{...styles.text, color: colorText}}>{text}</Text>
            <View style={styles.icon}>{icon2}</View>
        </SafeAreaView>
    );
}


export default Navbar;