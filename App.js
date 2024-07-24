import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider } from 'react-native-paper'
import HomeScreen from './pages/HomeScreen'
import DetailsScreen from './pages/DetailScreen'
import { darkTheme, lightTheme } from './lib/theme'
import { useColorScheme } from 'react-native'
import SplashScreen from './pages/SplashScreen'

const Stack = createStackNavigator()

export default function App() {
  const [loading, setLoading] = useState(true)
  const colorScheme = useColorScheme()
  console.log(colorScheme)
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme
  console.log(theme.colors.primary)

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: theme.colors.background
            }
          }}
        >
          {
            loading ? (
              <Stack.Screen name='Splash' component={SplashScreen} />
            ) : (
              <React.Fragment>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
              </React.Fragment>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}