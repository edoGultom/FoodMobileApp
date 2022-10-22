import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HScrollView } from 'react-native-head-tab-view';
import { SceneMap, TabBar } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import { FoodCard, Gap } from '../..';
import ItemListFood from '../ItemListFood';
import { useDispatch, useSelector } from 'react-redux';
import { getInPastOrder, getInProgress } from '../../../redux/action';
import { getData } from '../../../utils';

const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBarStyle}
        tabStyle={styles.tabStyle}
        renderLabel={({ route, focused }) => (
            <Text style={styles.tabText(focused)}>{route.title}</Text>
        )}
    />
);


const InProgress = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { inProgress } = useSelector(state => state.orderReducer)
    useEffect(() => {
        getData('token').then(res => {
            dispatch(getInProgress(res.value))
        })
    }, []);
    return (
        <HScrollView index={0} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerNewTaste}>
                {inProgress.map(order => {
                    return <ItemListFood
                        key={order.id}
                        image={{ uri: order.food.picturePath }}
                        name={order.food.name}
                        items={order.quantity}
                        rating={order.food.rate}
                        price={order.total}
                        type="in_progress"
                        onPress={() => navigation.navigate('OrderDetail', order)}
                    />
                })}
            </View>
        </HScrollView>
    );
};

const PastOrder = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { pastOrder } = useSelector(state => state.orderReducer)
    useEffect(() => {
        getData('token').then(res => {
            dispatch(getInPastOrder(res.value))
        })
    }, []);
    return (
        <HScrollView index={1} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerPopular}>
                {pastOrder.map(order => {
                    return <ItemListFood
                        key={order.id}
                        image={{ uri: order.food.picturePath }}
                        name={order.food.name}
                        items={order.quantity}
                        price={order.total}
                        type="past_orders"
                        date={order.created_at}
                        status={order.status}
                        onPress={() => navigation.navigate('OrderDetail', order)}
                    />
                })}
            </View>
        </HScrollView>
    );
};


const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
    ]);

    const renderScene = SceneMap({
        1: InProgress,
        2: PastOrder,
    });

    return (
        <CollapsibleHeaderTabView
            renderScrollHeader={() =>
                <View style={{ height: 1 }} />
            }
            makeHeaderHeight={() => 200}
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            scrollEnabled={false}
            style={{ backgroundColor: 'white' }}
        />
    );
};

export default OrderTabSection;

const styles = StyleSheet.create({
    tabView: { backgroundColor: 'red' },
    indicator: {
        backgroundColor: '#020202',
        height: 3,
        width: '0.2%',
    },
    tabBarStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
    },
    tabStyle: { width: 'auto' },
    tabText: (focused) => ({
        fontFamily: 'Poppins-Medium',
        color: focused ? '#020202' : '#8D92A3',
    }),
    containerNewTaste: { paddingTop: 8, paddingHorizontal: 24 },
    containerPopular: { paddingTop: 8, paddingHorizontal: 24 },
    containerRecommended: { paddingTop: 8, paddingHorizontal: 24 },

});
