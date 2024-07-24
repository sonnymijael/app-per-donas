// SplashScreen
import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { useTheme } from 'react-native-paper'
// images
const splash_icon = require('../assets/icon.png')

const SplashScreen = () => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.text, { color: colors.text }]}>Welcome to Per🍩</Text>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SplashScreen
