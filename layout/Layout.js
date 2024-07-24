import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import Footer from '../components/Footer';

const Layout = ({ children, title }) => {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            {/* StatusBar for Android */}
            {Platform.OS === 'android' && (
                <RNStatusBar
                    barStyle={colors.text === '#ffffff' ? 'light-content' : 'dark-content'}
                    backgroundColor={colors.primary}
                    translucent
                />
            )}
            {/* Content */}
            <View style={[styles.content, { backgroundColor: colors.background }]}>
                {children}
            </View>
            {/* Footer */}
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        padding: 16,
        // Padding top adjusted for iOS SafeArea and Android StatusBar
        paddingTop: Platform.OS === 'ios' ? 16 : 0,
    },
});

export default Layout;
