import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, ScrollView,SafeAreaView, Image, StyleSheet } from 'react-native';
import { CartContext } from '../context/cardContent';
import { getProduct } from '../services/productService';

export function ProductDetails({ route }) {
    const { productId } = route.params;
    
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProduct(productId));
    });

    function onAddToCart(){
        addItemToCart(product.id);
    }


    return (
        <SafeAreaView>
          {product && product !== null && (
                <>
                    <Image style={styles.image} source={{ uri : product.image }} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{product.name}</Text> 
                        <Text style={styles.price}>R$ {product.price}</Text> 
                        <Text style={styles.description}>{product.description}</Text>
                        <Button 
                            style={styles.buttonAddToCart}
                            title="Adicionar ao carrinho" 
                            onPress={onAddToCart} 
                        />
                    </View>
                </>
          )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ddd",
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 1,
        marginVertical:  18,
    },
    image: {
        height: 320,
        width: "100%",
    },
    infoContainer: {
        padding: 20,
    },
    name: {
        fontSize: 21,
        fontWeight: "normal",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: "normal",
        color:"#333",
        marginBottom: 10,
    },
    buttonAddToCart: {
        backgroundColor: "#f00",
    }
})