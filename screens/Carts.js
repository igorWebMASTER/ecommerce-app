import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { CartContext } from '../context/cardContent';

export function Carts({ navigation }) {
    const {items, getItemsCount, getTotalPrice } = useContext(CartContext);
    console.log(items?.[0]?.product?.image)

    function Totals(){
        let [total,setTotal]= useState(0);
        
        useEffect(()=> {
            setTotal(getTotalPrice());
        });

        return (
            <View style={styles.totals}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.lineRight}>$ {total}</Text>
            </View>
        )
    }

    function renderItem({item}){
        return (
            <View style={styles.cartLine}>
                <Image  source={{ uri: items?.[0]?.product?.image }} />
                <Text style={styles.lineLeft}> {item?.product.name} x {item.qty} </Text>
                <Text style={styles.lineRight}>R$ {item?.totalPrice} </Text>
            </View>
        )
    }

    

    return (
        <FlatList 
            style={styles.itemsList} 
            contentContainerStyle={styles.itemListContainer} 
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.product.id.toString()}
            ListFooterComponent={Totals}

         />
    )
}

const styles = StyleSheet.create({
    cartLine: {
        flexDirection: "row",
        padding: 10,
        elevation: 1,
        backgroundColor: "#fff",
        shadowOpacity: 0.25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        marginBottom: 18,


    },
    cartLineTotal: {
        flexDirection: "row",
        borderTopColor: "#ccc",
        borderTopWidth: 2,
    },
    lineTotal: {
        fontWeight: "bold",
    },
    lineLeft: {
        fontSize: 18,
        lineHeight: 25, 
        color: "#000"
    },
    lineRight: {
        flex:1,
        fontSize:18,
        fontWeight: '600',
        lineHeight: 25,
        color: "#000",
        textAlign: "right",
    },
    itemList: {
        backgroundColor: "#ddd",
    },
    itemListContainer: {
        backgroundColor: "#ddd",
        paddingVertical: 10,
        marginHorizontal: 10,
    }
})
