import React , { useEffect, useState } from 'react'
import {  FlatList, StyleSheet } from 'react-native'
import { getProducts } from '../../services/productService'
import { Product } from '../Product'



export function ProductList({ navigation }: any) {
    
    function renderProduct({ item: product} : any){
        return (
            <Product {...product} 
                onPress={() => {
                    navigation.navigate('ProductDetails', {
                        product: product.id
                    })
                }}
            />
        )
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
     setProducts(getProducts() as any)
    },[])
    
    return (
        <FlatList 
            style={styles.productList}
            contentContainerStyle={styles.productListContent}
            keyExtractor={(item: any, ) => item?.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productList: {
        backgroundColor: "#d9d9d9",
    },
    productListContent: {
        backgroundColor: "#d9d9d9",
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});