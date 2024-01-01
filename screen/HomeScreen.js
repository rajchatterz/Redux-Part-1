import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../component/ProductDetails'
import SearchBox from '../component/SearchBox'
import { useDispatch } from 'react-redux'
import { addToCart } from '../component/redux/action'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        console.warn(item);
        dispatch(addToCart(item))
    }
    const renderData = ({item}) => (
        <View style={styles.container}>
            <Image source={{uri:item.image}} style={{width: 150, height: 150,}}/>
            <Text style={styles.nameView}>{item.name}</Text>
            <Text style={styles.priceView}>{item.price}</Text>
            <TouchableOpacity onPress={()=>handleClick(item)}>
                <Text style={styles.buttonView}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )
  return (
      <View style={{backgroundColor:'white'}}>
          <SearchBox/>
          <FlatList
              data={Product}
              renderItem={renderData}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              columnWrapperStyle={styles.flatListView}
              contentContainerStyle={styles.flatListViewContain}
          />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 270,
        width: '45%',
        alignItems: 'center',
        elevation: 100,
        shadowColor: 'purple',
        shadowOpacity: 0.7,
        shadowRadius: 10,
        borderWidth: 0.6,
        paddingHorizontal: 10,
        paddingVertical:10,
        borderColor: '#1b011b',
        borderRadius:10

    },
    flatListView: {
        justifyContent:'space-between'
    },
    flatListViewContain: {
        paddingBottom:160
    },
    buttonView: {
        backgroundColor: '#ac73fc',
        fontSize: 16,
        fontWeight: '800',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius:6
        
        
    },
    nameView: {
        fontSize: 16,
        fontWeight: '900',
        
    },
    priceView: {
        fontWeight: '500',
        margin:6
    }
})