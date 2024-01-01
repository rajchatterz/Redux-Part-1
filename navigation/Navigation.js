import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootComponent from '../component/RootComponent'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
         <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen options={{headerShown:false}} name='Root' component={RootComponent}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation