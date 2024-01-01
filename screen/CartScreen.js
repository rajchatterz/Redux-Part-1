import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const CartScreen = () => {
    const cartItem = useSelector((state) => state.reducer)
    console.log(cartItem)

  return (
    <View>
          {cartItem.map((item) => (
              <View>
                  <Text>{ item.name}</Text>
                  </View>
      ))}
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})