import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({ text, color = '#FFC700', textColor = "#020202", onPress }) => {
    return (
        <Pressable
            android_ripple={{
                color: '#FCF8E8',
                borderless: false,
            }}
            style={styles.container(color)}
            onPress={onPress}
        >
            <Text style={styles.text(textColor)}>{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        borderRadius: 8,
        padding: 12
    }),
    text: (color) => ({
        fontSize: 14,
        color: color,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    })
})