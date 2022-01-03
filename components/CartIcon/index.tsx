import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CartContext } from '../../context/cardContent'

export  function CartIcon({ navigation }: any)  {
    const { getItemsCount } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() =>{
                navigation.navigate("Cart")
            }}>
                Carrinho ({getItemsCount()})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: "#515b8c",
        height: 40,
        padding: 10,
        borderRadius: 38 / 2,
        marginBottom:10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "normal",
        fontSize: 12,
    }
    
})
