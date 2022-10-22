import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
// import { IcBack } from '../../../assets';

export default function Loading() {
    return (
        <View style={styles.container}>
            <LottieView
                source={require("../../../assets/Ilustration/loading-cat.json")}
                style={styles.animation}
                autoPlay
            />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        // marginTop: 5
    }
});