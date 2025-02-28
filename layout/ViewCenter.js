import React from 'react'
import { View, StyleSheet } from 'react-native'

const ViewCenter = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10 
    }
})

export default ViewCenter
