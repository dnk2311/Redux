import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from "./redux/action";

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        // console.warn("Konichiwa", item);
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart=(item)=>{
        // console.warn(item);
        dispatch(removeFromCart(item.name))
    }
   useEffect(()=>{
    let result = cartItems.filter((element)=>{
        return element.name === item.name
    });
    if(result.length){
        setIsAdded(true)
    }else{
        setIsAdded(false)
    }
   },[cartItems])
    return (
        <View style={{ alignItems: 'center', borderBlockColor: 'orange', borderBottomWidth: 5, padding: 10, marginBottom: 75}}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title="Remove To Cart" onPress={() => handleRemoveFromCart(item)} />
                    :
                    <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Product;