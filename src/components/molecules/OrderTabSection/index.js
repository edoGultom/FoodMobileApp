import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HScrollView } from 'react-native-head-tab-view';
import { SceneMap, TabBar } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import { FoodCard, Gap } from '../..';
import ItemListFood from '../ItemListFood';

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
    return (
        <HScrollView index={0} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerNewTaste}>
                <ItemListFood
                    image={FoodDummy1}
                    name="Sop Bumil"
                    items={3} price="2000.000"
                    type="in_progress"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
                <ItemListFood
                    image={FoodDummy2}
                    name="Pecel Lele"
                    items={1}
                    type="in_progress"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
                <ItemListFood
                    image={FoodDummy3}
                    name="Nasi Goreng Kampung"
                    items={2}
                    type="in_progress"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
            </View>
        </HScrollView>
    );
};

const PastOrder = () => {
    const navigation = useNavigation();
    return (
        <HScrollView index={1} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerPopular}>
                <ItemListFood
                    image={FoodDummy3}
                    name="Jus Mangga"
                    items={3} price="2000.000"
                    type="past_orders"
                    date="Jun 12, 14:00"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
                <ItemListFood
                    image={FoodDummy2}
                    name="Jus Pokat"
                    items={3} price="2000.000"
                    type="past_orders"
                    date="Mei 2, 09:00"
                    status="Cancelled"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
                <ItemListFood
                    image={FoodDummy1}
                    name="Jus Timun"
                    items={3} price="2000.000"
                    type="past_orders"
                    date="Mei 2, 09:00"
                    onPress={() => navigation.navigate('OrderDetail')}
                />
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
