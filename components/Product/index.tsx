import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

interface IProductProps {
    name: string;
    image: string;
    price: number;
    onPress: () => void;
}

export function Product({ name, price, image, onPress }: IProductProps) {
    return (
        <TouchableOpacity style={styles.card}  onPress={onPress}>
            <Image style={styles.thumb} source={{ uri: image}} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}> $ {price}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ddd",
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        marginVertical: 18
    },
    thumb: {
        height: 289,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        width:'100%',
    },
    infoContainer: {
        padding: 25,
    },
    name: {
        fontSize: 21,
        marginLeft: 10,
        fontWeight: 'normal',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    }

});