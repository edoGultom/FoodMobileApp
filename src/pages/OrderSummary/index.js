import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Gap, Header, ItemListFood, ItemValue, Loading } from '../../components'
import { getData } from '../../utils'
import { API_HOST } from '../../config';
import { WebView } from 'react-native-webview';

const OrderSummary = ({ navigation, route }) => {
    const { item, transaction, userProfile } = route.params
    const [token, setToken] = useState('');
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState('https://google.com');

    const onCheckOut = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: 'PENDING'
        }
        getData('token').then(res => {
            Axios.post(`${API_HOST.url}/checkout`, data, {
                headers: {
                    'Authorization': token,
                }
            }).then(res => {
                setIsPaymentOpen(true);
                setPaymentUrl(res.data.data.payment_url);

            }).catch(err => {
                console.log('error checkout : ', err)
            })
        })

    }
    const onNavChange = (state) => {
        if (String(state.url).includes('#/406')) {
            navigation.reset({ index: 0, routes: [{ name: 'SuccessOrder' }] })
        }
    }
    if (isPaymentOpen) {
        return (
            <>
                <Header
                    title="Payment"
                    subtitle="You deserve better meal"
                    onBack={() => setIsPaymentOpen(false)}
                />
                {/* di webview kita bisa tau perubahan yg dilakukan disini */}
                <WebView
                    source={{ uri: paymentUrl }}
                    startInLoadingState={true}
                    renderLoading={() => <Loading />}
                    onNavigationStateChange={onNavChange}//kita bisa melihat perubahan url (untuk kebutuhan redirect success)
                />
            </>
        )
    }

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
                <Button
                    text="Checkout Now"
                    onPress={onCheckOut}
                />
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