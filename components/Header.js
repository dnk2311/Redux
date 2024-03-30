import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux'

const Header = () => {

  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItems] = useState(0)
  // console.warn(cartData);
  useEffect(() => {
    setCartItems(cartData.length)
  }, [cartData])
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30, textAlign: 'right', padding: 10,
        backgroundColor: 'orange'
      }}>
        <View style={{backgroundColor:'green',borderRadius:15,height:40,width:40}}>
          <Text style={{fontSize:30}}>{cartItems}</Text>
        </View>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})

export default Header;