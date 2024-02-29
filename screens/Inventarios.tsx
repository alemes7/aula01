import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BlocoCad from '../components/BlocoCad';

function Adicionar() {
    alert("Adicionar");
}

function Inventarios() {
    return (
        <>
            <Navbar
                icon1={[<TouchableOpacity><Octicons name="three-bars" size={24} color="black" /></TouchableOpacity>]}
                icon2={[<TouchableOpacity><AntDesign name="search1" size={24} color="black" /></TouchableOpacity>]}>
            </Navbar>
            <ScrollView stickyHeaderIndices={[0]}>
                <StatusBar backgroundColor="black" />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
                <BlocoCad text='CADEIRA SENAI' />
            </ScrollView>
            <View style={styles.addButtonContainer}>
                    <AntDesign name="pluscircle" size={50} color="red" onPress={Adicionar} />
                </View>
            <View style={styles.display}>
                <FontAwesome6 name="camera-rotate" size={30} color="#ffffff" />
                <FontAwesome5 name="list-ol" size={30} color="#ffffff" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    display: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0000",
        gap: 30,
        paddingBottom: 10,
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
});

export default Inventarios;