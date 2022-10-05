import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components'

const OrderSummary = ({ navigation }) => {
    return (
        <ScrollView>
            <Header title="Payment" subtitle="You deserve better meal" onBack={() => { }} />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ItemListFood name="Sop Buah" type="order_summary" price="140.000" image={FoodDummy1} items={14} />
                <Text style={styles.label}>Details Transaction</Text>
                <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
                <ItemValue label="Driver" value="IDR 50.000" />
                <ItemValue label="Tax 10%" value="IDR 1.800.390" />
                <ItemValue label="Total Price" value="IDR 390.803.000" valueColor='#1ABC9C' />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Deliver to:</Text>
                <ItemValue label="Name" value="Angga Risky" />
                <ItemValue label="Phone No." value="0822 0819 9688" />
                <ItemValue label="Address" value="Setra Duta Palima" />
                <ItemValue label="House No." value="A5 Hook" />
                <ItemValue label="City" value="Bandung" />

            </View>

            <View style={styles.button}>
                <Button text="Checkout Now" onPress={() => navigation.replace('SuccessOrder')} />
            </View>
            <Gap height={40} />
        </ScrollView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24
    }
})