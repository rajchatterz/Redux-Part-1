import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CartScreen = ({navigation}) => {
  const cartItem = useSelector((state) => state.reducer)

    return (
      <>
    <ScrollView>
      {cartItem.map((item) => (
        <View style={styles.container} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.imageView} />
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      ))}
            </ScrollView>
            
          <TouchableOpacity style={styles.orderButton} onPress={()=>navigation.navigate('Order')}>
              <Text style={styles.orderText}>Click To Order</Text>
            </TouchableOpacity>
            </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#ac73fc',
    margin: 10,
    borderRadius: 13,
  },
  imageView: {
    width: 130,
    height: 130,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 14,
    color: 'gray',
  },
  countText: {
    fontSize: 14,
    color: 'blue',
    },
    orderText: {
        color: 'white',
        fontSize:18,
        fontWeight: '900',

    },
    orderButton: {
        backgroundColor: '#ac73fc',
        marginHorizontal: 20,
        height: 40,
        borderRadius: 10,
        marginBottom:20
        ,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
