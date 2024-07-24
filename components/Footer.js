import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { useTheme } from 'react-native-paper'
import PawIcon from './PawIcon'

const Footer = () => {
    const { colors } = useTheme()
    const currentYear = new Date().getFullYear()

    const openWebsite = () => {
        Linking.openURL('https://sonnymijael.com')
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <TouchableOpacity onPress={openWebsite} style={styles.logoContainer}>
                <PawIcon size={24} />
            </TouchableOpacity>
            <Text style={[styles.text, { color: colors.text }]}>
                Created by{' '}
                <Text style={[styles.link, { color: colors.primary }]} onPress={openWebsite}>
                    @sonnymijael
                </Text>
                {' • '}
                <Text style={[styles.text, { color: colors.text }]}>
                    {currentYear}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    logoContainer: {
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    },
    link: {
        textDecorationLine: 'underline',
    },
})

export default Footer
