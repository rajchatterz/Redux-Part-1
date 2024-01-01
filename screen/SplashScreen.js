import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    },3000)
  })
  return (
    <View style={styles.container}>
      <Image source={require('../assets/apple.png')} style={styles.image} />
      <ActivityIndicator
        size={40}
        
        color={'purple'}
        style={styles.indicator}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    image: {
      resizeMode: 'contain',
      position:'absolute'
        
        
  },
  indicator: {
    marginTop: 250,
    
  }
  
})
