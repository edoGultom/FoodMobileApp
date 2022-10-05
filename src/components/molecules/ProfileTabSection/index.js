import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HScrollView } from 'react-native-head-tab-view';
import { SceneMap, TabBar } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import { FoodCard, Gap } from '../..';
import ItemListMenuProfile from '../ItemListMenuProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


const Account = () => {
    const navigation = useNavigation();
    const signOut = () => {
        AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
        });
    }
    return (
        <HScrollView index={0} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerNewTaste}>
                <ItemListMenuProfile text="Edit Profile" />
                <ItemListMenuProfile text="Home Address" />
                <ItemListMenuProfile text="Security" />
                <ItemListMenuProfile text="Payments" />
                <ItemListMenuProfile text="Sign Out" onPress={signOut} />
            </View>
        </HScrollView>
    );
};

const FoodMarket = () => {
    const navigation = useNavigation();
    return (
        <HScrollView index={1} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerPopular}>
                <ItemListMenuProfile text="Rate App" />
                <ItemListMenuProfile text="Help Center" />
                <ItemListMenuProfile text="Privacy & Policy" />
                <ItemListMenuProfile text="Terms & Conditions" />
            </View>
        </HScrollView>
    );
};


const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'FoodMarket' },
    ]);

    const renderScene = SceneMap({
        1: Account,
        2: FoodMarket,
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

export default ProfileTabSection;

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
