import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootComponent from '../component/RootComponent'
import SplashScreen from '../screen/SplashScreen'
import HomeScreen from '../screen/HomeScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
         <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen options={{ headerShown: false }} name='splash' component={SplashScreen} />
        <Stack.Screen name='Root' component={RootComponent} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation