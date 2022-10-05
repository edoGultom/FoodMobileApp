import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components'

const OrderSummary = ({ navigation, route }) => {
    const { item, transaction, userProfile } = route.params
    return (
        <ScrollView>
            <Header
                title="Payment"
                subtitle="You deserve better meal"
                onBack={() => navigation.goBack()}

            />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>

                <ItemListFood
                    name={item.name}
                    type="order_summary"
                    price={item.price}
                    image={{ uri: item.picturePath }}
                    items={transaction.totalItem}
                />

                <Text style={styles.label}>Details Transaction</Text>
                <ItemValue label={item.name} value={transaction.totalPrice} type='currency' />
                <ItemValue label="Driver" value={transaction.driver} type='currency' />
                <ItemValue label="Tax 10%" value={transaction.tax} type='currency' />
                <ItemValue label="Total Price" value={transaction.total} valueColor='#1ABC9C' type='currency' />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Deliver to:</Text>
                <ItemValue label="Name" value={userProfile.name} />
                <ItemValue label="Phone No." value={userProfile.phoneNumber} />
                <ItemValue label="Address" value={userProfile.address} />
                <ItemValue label="House No." value={userProfile.houseNumber} />
                <ItemValue label="City" value={userProfile.city} />

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