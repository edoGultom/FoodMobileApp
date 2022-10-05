import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcNext } from '../../../assets'

const ItemListMenuProfile = ({ text, color = '#FFF', onPress }) => {
    return (
        <Pressable
            android_ripple={{
                color: '#FFC700',
                borderless: false,
                foreground: true,
                radius: 170
            }}
            style={styles.btnContainer(color)}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <IcNext />
            </View>
        </Pressable>
    )
}

export default ItemListMenuProfile

const styles = StyleSheet.create({
    btnContainer: (color) => ({
        backgroundColor: color,
        borderRadius: 8,
        padding: 12
    }),
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    text: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: '#020202'
    }

})