import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/PatrimonioBar';
import BottomNav from '../components/Input';
import InputLabel from '../components/Itens';

function Editar() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
  });

  return (
    <View style={styles.container}>
      <Navbar
        icon1={<AntDesign name="arrowleft" size={30} color="white" />}
        icon2={<AntDesign name="checkcircle" size={26} color="white" />}
        text="Editar" colorText='white'
        backgroundColor='#FF0000'
      />
      <View style={{ marginTop: 30 }} />
      <InputLabel text="Nº Inventário" placeholder='957689'/>
      <InputLabel text="Descrição" placeholder='CADEIRA GIRATÓRIA'/>
      <InputLabel text="Local" placeholder='SALA C13'/>
      <InputLabel text="Responsável" placeholder='CARLOS'/>
      <InputLabel text="Data de Registro" placeholder='05/03/2024'/>

      <BottomNav backgroundColor='#FFF' iconColor='#595959' border={1} />
    </View>
  );
}

export default Editar;