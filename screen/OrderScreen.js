import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderScreen = () => {
  return (
    <View style={styles.container}>
          <Text style={{ fontSize: 30, }}>Order Placed</Text>
          <Image source={require('../assets/succ.png')} style={{width:100,height:100}}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})