import React, { useState } from 'react'
import { Text, Button } from 'react-native-paper'
import Layout from '../layout/Layout'
import ViewCenter from '../layout/ViewCenter'
import { StyleSheet, Image, View, Animated, Dimensions } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'

const { width } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
    const [yesButtonScale, setYesButtonScale] = useState(new Animated.Value(1))
    const [noButtonOpacity, setNoButtonOpacity] = useState(new Animated.Value(1))
    const [noButtonTranslateX, setNoButtonTranslateX] = useState(new Animated.Value(0))
    const [showConfetti, setShowConfetti] = useState(false)
    const [showButtons, setShowButtons] = useState(true)
    const [showThankYou, setShowThankYou] = useState(false)
    const [imageSource, setImageSource] = useState(require('../assets/resources/thumbHamsterOjosGrandes.png'))

    const handleNoPress = () => {
        Animated.parallel([
            Animated.spring(yesButtonScale, {
                toValue: yesButtonScale._value + 0.1,
                useNativeDriver: true,
            }),
            Animated.timing(noButtonTranslateX, {
                toValue: noButtonTranslateX._value - 50,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(noButtonOpacity, {
                toValue: Math.max(0, 1 - (yesButtonScale._value - 1) * 2),
                duration: 300,
                useNativeDriver: true,
            })
        ]).start()
    }
    
    const handleYesPress = () => {
        setImageSource(require('../assets/resources/thankYouImage.png'))
        setShowConfetti(true)
        setShowThankYou(true)
        setShowButtons(false)
        setTimeout(() => {
            setShowConfetti(false)
        }, 6000)
    }

    const handleReset = () => {
        setYesButtonScale(new Animated.Value(1))
        setNoButtonOpacity(new Animated.Value(1))
        setNoButtonTranslateX(new Animated.Value(0))
        setShowButtons(true)
        setShowThankYou(false)
        setImageSource(require('../assets/resources/thumbHamsterOjosGrandes.png')) // Reset to original image
    }

    return (
        <Layout title='Home'>
            <ViewCenter>
                <Image 
                    style={styles.logo}
                    source={imageSource} 
                />
                {showThankYou ? (
                    <View style={styles.thankYouContainer}>
                        <Text variant='titleLarge'>¡Gracias!</Text>
                        <Button 
                            mode='contained' 
                            onPress={handleReset}
                        >
                            Resetear
                        </Button>
                    </View>
                ) : (
                    <>
                        <Text variant='titleLarge'>Me Per🍩?, please</Text>
                        <View style={styles.container_buttons}>
                            {showButtons && (
                                <>
                                    <Animated.View style={{ transform: [{ scale: yesButtonScale }] }}>
                                        <Button 
                                            mode='contained' 
                                            onPress={handleYesPress}
                                        >
                                            Sí
                                        </Button>
                                    </Animated.View>
                                    <Animated.View style={{ opacity: noButtonOpacity, transform: [{ translateX: noButtonTranslateX }] }}>
                                        <Button 
                                            mode='outlined' 
                                            onPress={handleNoPress}
                                        >
                                            No
                                        </Button>
                                    </Animated.View>
                                </>
                            )}
                        </View>
                    </>
                )}
                {showConfetti && <ConfettiCannon count={200} origin={{ x: width / 2, y: 0 }} />}
            </ViewCenter>
        </Layout>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 400,
        height: 400,
    },
    container_buttons: {
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thankYouContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HomeScreen
