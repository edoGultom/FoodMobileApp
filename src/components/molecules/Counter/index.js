import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcBtnMin, IcBtnPlus } from '../../../assets'

const Counter = () => {
    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{
                    color: 'rgb(224, 224, 224)',
                    borderless: false,
                    foreground: true
                }}
            >
                <IcBtnMin />
            </Pressable>
            <Text style={styles.value}>Counter</Text>
            <Pressable
                android_ripple={{
                    color: 'rgb(224, 224, 224)',
                    borderless: false,
                    foreground: true
                }}
            >
                <IcBtnPlus />
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginHorizontal: 10
    }
})