import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const SearchBox = ({navigation}) => {
    const cartItem = useSelector((state) => state.reducer)
    const [data, setData] = useState('')
    useEffect(() => {
        setData(cartItem.length)
    },[cartItem])
  return (
    <View style={styles.container}>
          <Text style={styles.textView}>ShopCart</Text>
          <TouchableOpacity onPress={navigation.navigate('')}>
            <Text style={{ fontSize: 20 }}>{ data}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection:'row',
        width: '95%',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b891ef',
        borderRadius: 10,
        paddingHorizontal:30
    

    },
    textView: {
        fontSize: 20,
        fontWeight:'900'
    }
})