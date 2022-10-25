import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Loading, OrderTabSection } from '../../components'
import EmptyOrder from '../../components/molecules/EmptyOrder'
import { getOrders } from '../../redux/action'
import { addLoading } from '../../redux/reducer/globalSlice'
import { getData } from '../../utils'

const Order = () => {
    const [isEmpty] = useState(false);
    const dispatch = useDispatch();
    const { orders, isFinish } = useSelector(state => state.orderReducer);

    useEffect(() => {
        getData('token').then(res => {
            dispatch(getOrders(res.value))
        })
    }, []);

    // console.log('order ', orders)
    return (
        <View style={styles.container}>
            {
                isFinish && Object.keys(orders).length === 0
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