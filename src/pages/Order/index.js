import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, OrderTabSection } from '../../components'
import EmptyOrder from '../../components/molecules/EmptyOrder'
import { getOrders } from '../../redux/action'
import { getData } from '../../utils'

const Order = () => {
    const [isEmpty] = useState(false);
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orderReducer);

    useEffect(() => {
        getData('token').then(res => {
            dispatch(getOrders(res.value))
        })
    }, []);

    return (
        <View style={styles.container}>
            {
                orders.length < 1
                    ?
                    <EmptyOrder />
                    :
                    <View style={styles.content}>
                        <Header
                            title="Your Orders"
                            subtitle="Wait for the best meal"
                        />
                        <View style={styles.tabContent}>
                            <OrderTabSection />
                        </View>
                    </View>
            }
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
        marginTop: 24
    }
})