import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootComponent from '../component/RootComponent'
import SplashScreen from '../screen/SplashScreen'
import HomeScreen from '../screen/HomeScreen'
import CartScreen from '../screen/CartScreen'
import OrderScreen from '../screen/OrderScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
         <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen options={{ headerShown: false }} name='splash' component={SplashScreen} />
        <Stack.Screen name='Root' component={RootComponent} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name='Cart' options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#ac73fc' }, headerTitleStyle: { fontWeight: '800', fontSize: 16 } }} component={CartScreen} />
        <Stack.Screen name='Order' component={OrderScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation