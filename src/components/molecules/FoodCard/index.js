import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Rate from '../Rate'

const FoodCard = ({ image, name, rating, onPress }) => {
    return (

        <View style={styles.container}>
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
                    }

                ]}
            >
                <Image source={image} style={styles.image} />

                {/* title and rate */}
                <View style={styles.content}>

                    <Text styles={styles.text}>{name}</Text>

                    {/* componenet rate */}
                    <Rate number={rating} />
                </View>
            </Pressable>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 24
    },
    image: {
        width: 200,
        height: 140,
        resizeMode: 'cover'
    },
    content: {
        padding: 12
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
})