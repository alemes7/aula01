import React from 'react';
import { View,  ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../../../../components/PatrimonioBar';
import BlocoCad from '../../../../components/Button';
import BottomNav from '../../../../components/Input';

function Adicionar() {
    alert("Adicionar");
}

function Inventarios() {
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

    return (
        <>
            <Navbar icon1={<Octicons name="three-bars" size={24} color="black" />} icon2={<FontAwesome5 name="search" size={24} color="black" />} text="Lista" backgroundColor='white' colorText='#595959'/>
            <ScrollView>
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
                    <AntDesign name="pluscircle" size={50} color="#FF0000" onPress={Adicionar} />
            </View>
            <BottomNav backgroundColor='#FF0000' iconColor='white' border={0}/>
        </>
    );
}


export default Inventarios;
