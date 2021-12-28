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
            <Image style={styles.thumb} source={image as any} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}> $ {price}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 100,
    },
    thumb: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        flex: 1,
        padding: 25,
    },
    name: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }

});