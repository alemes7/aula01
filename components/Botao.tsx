import { Link } from "expo-router"
import { LinkProps } from "next/link"
import { Text,TouchableOpacity,StyleSheet, View } from "react-native"


interface LinkBtnProps extends LinkProps{
    text: string
}

export default function LinkBtn({text, ...props}: LinkBtnProps){
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 20,
        },
    
        button: {
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            width: '90%',
        },
    
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
        },
    });

    return (
        <Link href="#" style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
}

