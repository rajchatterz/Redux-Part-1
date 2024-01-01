import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../component/ProductDetails'
const HomeScreen = () => {
  return (
    <View>
          {Product.map((item, index) => (
              <View>
                  <Text>{ item.name}</Text>
              </View>
      ))}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})