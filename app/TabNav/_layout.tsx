import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';
import { useColor } from "../../temas/temas";
import { Ionicons } from '@expo/vector-icons';

export default function layout(){
    const cores = useColor()
    return(
        
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: cores.bgPrimary },
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="camera-alt" size={size} color={color} />
            ),
        }}>
        <Tabs.Screen name="Scanner"
            options={{
                headerRight: () => <Ionicons name="refresh" size={24} color={'white'} style={{ padding: 10 }} />,
                headerTitle: "Scanner",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecondary },
            }}
        />

        <Tabs.Screen name="DrawerNav"
            options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: '#FF0000'},
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: '#fff',
            }}
        />   
        </Tabs>
    )
}