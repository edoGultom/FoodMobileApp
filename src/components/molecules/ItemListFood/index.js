import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Number from '../Number';
import Rate from '../Rate';

/*
TYPE akan dibagi ke beberapa bagian agar memperkecil komponen
1. product
2. order-summary
3.in-progress
4. past-orders
*/
const ItemListFood = ({ image, name, onPress, rating, items, price, type, date, status }) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                //item list product seperti di home page
                return (
                    // fragment karena return hanya boleh mereturn 1 induk (tidak boleh nesting)
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Number number={price} style={styles.price} />
                        </View>
                        <Rate number={rating} />
                    </>
                );
            case 'order_summary':
                //item order summary
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Number number={price} style={styles.price} />
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                );
            case 'in_progress':
                //item in progress di order tab section
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Number number={price} style={styles.price} />
                        </View>
                    </>
                );
            case 'past_orders':
                //item past orders di order tab section
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Number number={price} style={styles.price} />
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                );
            default:
                //item pruduct
                return (
                    // fragment karena return hanya boleh mereturn 1 induk (tidak boleh nesting)
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Number number={price} style={styles.price} />
                        </View>
                        <Rate />
                    </>
                );
        }
    }

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? 'rgb(224, 224, 224)'
                        : 'white'
                },
                {
                    opacity: pressed
                        ? 0.7
                        : 1
                },
                styles.wrapperCustom

            ]}

        >
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
            </View>
        </Pressable>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12
    },
    content: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    price: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    items: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    date: {
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        color: '#8D92A3'
    },
    status: {
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        color: '#D9435E'
    }
})