import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBox = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.textView}>ShopCart</Text>
          <Text style={{ fontSize: 20 }}>0</Text>
          
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