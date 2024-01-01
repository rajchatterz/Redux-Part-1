import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>Welcome</Text>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '95%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b891ef',
        borderRadius:10,
    

    },
    textView: {
        fontSize: 30,
        fontWeight:'900'
    }
})