import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, OrderTabSection } from '../../components'
import EmptyOrder from '../../components/molecules/EmptyOrder'

const Order = () => {
    const [isEmpty] = useState(false)
    return (
        <View style={styles.container}>
            {

                isEmpty ?
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