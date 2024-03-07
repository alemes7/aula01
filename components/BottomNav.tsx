import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

type BottomNavProps = {
  backgroundColor: string;
  iconColor: string;
  border: number;
};

function BottomNav({ backgroundColor, iconColor, border }: BottomNavProps) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
      paddingBottom: 10,
      borderBottomColor: '#CBCBCB',
    },
    display: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 0,
      margin: 20,
      marginBottom: 50,
      height: 60,
    },
  });

  return (
    <>
      <View style={{ ...styles.container, backgroundColor: backgroundColor, borderWidth: border}}>
        <View style={styles.display}>
          <FontAwesome6 name="camera-rotate" size={30} color={iconColor} />
          <FontAwesome5 name="list-ol" size={30} color={iconColor} />
        </View>
      </View>
    </>
  );
}

export default BottomNav;
