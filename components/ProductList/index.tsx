import React , { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Product } from '../Product'



export function ProductList({ item: product}) {
    
    function renderProduct(){
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
    
    return (
        <FlatList 
            style={styles.productList}
            contentContainerStyle={styles.productListContent}
            keyExtractor={(item, ) => item?.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}
