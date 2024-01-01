import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../component/ProductDetails'
const HomeScreen = () => {
    const renderData = ({item}) => (
        <View>
            <Text>{item.name}</Text>
            <Image source={{uri:item.image}} style={{width: 200, height: 300,}}/>
        </View>
    )
  return (
    <View>
          <FlatList
              data={Product}
              renderItem={renderData}
              keyExtractor={(item,index)=>index.toString()}
          />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})