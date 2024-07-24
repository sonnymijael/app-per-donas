import React from 'react'
import { useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

const PawIcon = ({ size = 24 }) => {
    const { colors } = useTheme()

    return (
        <Ionicons 
            name="paw-sharp" 
            size={size} 
            color={colors.text}
        />
    )
}

export default PawIcon
