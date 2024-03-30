import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import Header from "./Header";
import Product from "./Product";


const ProductWrapper = ({navigation}) => {

  const products=[
    {
      name:'Điện thoại Samsung',
      color:'white',
      price:5000000,
      image:'https://static.vecteezy.com/system/resources/thumbnails/009/377/011/small/new-realistic-black-mobile-smart-phone-modern-style-isolated-on-white-background-png.png'
    },
    {
      name:'Điện thoại Iphone',
      color:'black',
      price:10000000,
      image:'https://images.rawpixel.com/image_png_social_portrait/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczg5LXBvbS0wMDg1LnBuZw.png'
    },
    {
      name:'Điện thoại Xiaomi',
      color:'blue',
      price:7000000,
      image:'https://w7.pngwing.com/pngs/569/473/png-transparent-xiaomi-mi-12-lite-phone.png'
    }
  ]
  return (
    <View styles={styles.container}>
        <Button title="Go to User List" onPress={()=>navigation.navigate("User")}/>
      <Header />
      <ScrollView>
      {
        products.map((item)=> <Product item={item}/>)
      }
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ProductWrapper;