// HomeScreen
import React from 'react'
import { Text, Button } from 'react-native-paper'
import Layout from '../layout/Layout'
import ViewCenter  from '../layout/ViewCenter'

const HomeScreen = ({ navigation }) => {
    return (
        <Layout title='Home'>
            <ViewCenter>
                <Text>Welcome to the Home Screen!</Text>
                <Button mode='contained' onPress={() => navigation.navigate('Details')}>
                    Go to details
                </Button>
            </ViewCenter>
        </Layout>
    )
}

export default HomeScreen
