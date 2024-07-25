import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native'
import { useTheme } from 'react-native-paper'
import PawIcon from './PawIcon'

const Footer = () => {
    const { colors } = useTheme()
    const currentYear = new Date().getFullYear()

    const pulseAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        )
        pulse.start()

        return () => pulse.stop()
    }, [pulseAnim])

    const openWebsite = () => {
        Linking.openURL('https://sonnymijael.com')
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={openWebsite}>
                    <PawIcon size={14} color={colors.primary} />
                </TouchableOpacity>
                <Text>
                    {' '}
                </Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    Created by{' '}
                    <Animated.Text
                        style={[
                            styles.link,
                            { color: colors.primary },
                            { transform: [{ scale: pulseAnim }] }
                        ]}
                        onPress={openWebsite}
                    >
                        @sonnymijael
                    </Animated.Text>
                    {' • '}
                    <Text style={[styles.text, { color: colors.text }]}>
                        {currentYear}
                    </Text>
                </Text>
            </View>
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
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    },
    link: {
        textDecorationLine: 'underline',
        fontSize: 14,
    },
})

export default Footer
