import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import InputLabel from '../components/Input_Label';

function Add_itens() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
  });


  return (
    <View style={styles.container}>
      <Navbar
        icon1={<AntDesign name="arrowleft" size={24} color="white" />}
        icon2={<AntDesign name="pluscircleo" size={24} color="white" />}
        text="Cadastro de itens" colorText='white'
        backgroundColor='#FF0000'
      />
      <View style={{ marginTop: 30 }} />
      <InputLabel text="Nº Inventário" />
      <InputLabel text="Descrição" />
      <InputLabel text="Local" />
      <InputLabel text="Responsável" />
      <InputLabel text="Data de Registro" />


      <BottomNav backgroundColor='#FFF' iconColor='#595959' border={1} />
    </View>
  );
}

export default Add_itens;