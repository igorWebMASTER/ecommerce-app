import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../context/cardContent';
import { getProduct } from '../services/productService';

export function ProductDetails() {
    const { productId } = useState({});
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProduct(product.id));
    }, []);

    function onAddToCart(){
        addItemToCart(product.id);
    }


    return (
        <SafeAreaView>
          <ScrollView>
              <Image style={styles.image} source={{ uri: product.image }} />
              <View style={styles.infoContainer}>
                    <Text style={styles.title}>{product.name}</Text> 
                    <Text style={styles.price}>R$ {product.price}</Text> 
                    <Text style={styles.description}>{product.description}</Text>
                        <Button title="Adicionar ao carrinho" onPress={onAddToCart} />
                    </Text> 
              </View>
          </ScrollView>
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
    }
})