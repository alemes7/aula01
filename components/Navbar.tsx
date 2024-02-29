import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

type NavbarProps = {
    icon1: any;
    icon2: any;
}

const Navbar = ({icon1, icon2} :NavbarProps) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>
            <View>{icon1}</View>
            <View>{icon2}</View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 50,
        display: "flex",
        alignItems: "center",
        marginTop: 40,
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5"
    }

})

export default Navbar;