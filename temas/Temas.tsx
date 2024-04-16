import { useColorScheme } from "react-native" 

interface Cores {

    bgPrimary: string
    bgSecondary: string
    bgInfo?: string
}


const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecondary: "#FF0000",
    bgInfo: "#011E83",
}
const dark: Cores = {
    bgPrimary: "#240707",
    bgSecondary: "#FF0000",
}

export function useColor() {
    const colorScheme = useColorScheme()
    if (colorScheme === 'dark') {
        return dark
    }else {
        return light
    }
}