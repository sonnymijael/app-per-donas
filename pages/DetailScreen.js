// DetailsScreen.js
import React from 'react'
import { Text, Button } from 'react-native-paper'
import Layout from '../layout/Layout'
import ViewCenter from '../layout/ViewCenter';

const DetailsScreen = ({ navigation }) => {
  return (
    <Layout title="Details">
        <ViewCenter>
            <Text>Welcome to the Details Screen!</Text>
            <Button mode="contained" onPress={() => navigation.goBack()}>
                Go Back
            </Button>
        </ViewCenter>
    </Layout>
  );
};

export default DetailsScreen
