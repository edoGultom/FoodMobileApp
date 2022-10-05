import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NumericFormat } from 'react-number-format';

const Number = ({ number, type, style }) => {
    //Number Format biasa di react js tapi di react native jg bsa dengan menggunakan renderText
    //renderText digunakan karena defaultnya tag html <span>/<p> namun di react native tidak bisa membaca itu makan digunakan lah renderText
    if (type === 'decimal') {
        return (
            <NumericFormat
                value={number}
                displayType="text"
                renderText={(value) => <Text style={style}>{value}</Text>}
                decimalSeparator="."
                decimalScale={1}
                fixedDecimalScale
            />
        );
    }
    return (
        <NumericFormat
            value={number}
            thousandSeparator="."
            displayType="text"
            prefix="IDR "
            renderText={(value) => <Text style={style}>{value}</Text>}
            decimalSeparator=","

        />
    );
}

export default Number

const styles = StyleSheet.create({})