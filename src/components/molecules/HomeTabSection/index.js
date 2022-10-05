import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HScrollView } from 'react-native-head-tab-view';
import { SceneMap, TabBar } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';
import { useDispatch, useSelector } from 'react-redux';
import { FoodCard, Gap } from '../../../components';
import { getFoodByTypes } from '../../../redux/action';
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


const NewTaste = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodByTypes('new_food'))
    }, [])

    const { newTaste } = useSelector(state => state.homeReducer)
    return (
        <HScrollView index={0} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerNewTaste}>
                {
                    newTaste.map((item) => {
                        return (
                            <ItemListFood
                                key={item.id}
                                type="product"
                                name={item.name}
                                price={item.price}
                                rating={item.rate}
                                image={{ uri: item.picturePath }}
                                onPress={() => navigation.navigate('FoodDetail')}

                            />
                        );
                    })
                }
            </View>
        </HScrollView>
    );
};

const Popular = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodByTypes('popular'))
    }, [])

    const { popular } = useSelector(state => state.homeReducer)
    return (
        <HScrollView index={1} vertival showsVerticalScrollIndicator={false}>
            <View style={styles.containerPopular}>
                {
                    popular.map((item) => {
                        return (
                            <ItemListFood
                                image={{ uri: item.picturePath }}
                                name={item.name}
                                type="product"
                                price={item.price}
                                rating={item.rate}
                                onPress={() => navigation.navigate('FoodDetail')}
                            />

                        )
                    })
                }
            </View>
        </HScrollView>
    );
};

const Recommended = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodByTypes('recommended'));
    }, [])

    const { recommended } = useSelector(state => state.homeReducer)
    return (
        <HScrollView index={2} vertival showsVerticalScrollIndicator={false} >
            <View style={styles.containerRecommended}>
                {
                    recommended.map((item) => {
                        return (
                            <ItemListFood
                                image={{ uri: item.picturePath }}
                                name={item.name}
                                type="product"
                                price={item.price}
                                rating={item.rate}
                                onPress={() => navigation.navigate('FoodDetail')}
                            />

                        );
                    })
                }
            </View>
        </HScrollView>
    );
};
const initialLayout = { width: Dimensions.get('window').width };
const HomeTabSection = ({ foods }) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTaste,
        2: Popular,
        3: Recommended,
    });

    return (
        <CollapsibleHeaderTabView
            renderScrollHeader={() =>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <Gap width={24} />
                        {
                            foods.map((itemFood) => {
                                return (
                                    <FoodCard
                                        key={itemFood.id}
                                        image={{ uri: itemFood.picturePath }}
                                        name={itemFood.name}
                                        rating={itemFood.rate}
                                    />
                                )
                            })
                        }
                    </View>
                </ScrollView>
            }
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

export default HomeTabSection;

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
        // marginLeft: 20
    },
    tabStyle: { width: 'auto' },
    tabText: (focused) => ({
        fontFamily: 'Poppins-Medium',
        color: focused ? '#020202' : '#8D92A3',
    }),
    containerNewTaste: { flex: 1, paddingTop: 8, paddingHorizontal: 24 },
    containerPopular: { flex: 1, paddingTop: 8, paddingHorizontal: 24 },
    containerRecommended: { flex: 1, paddingTop: 8, paddingHorizontal: 24 },
    foodCardContainer: { flexDirection: 'row', marginVertical: 24 },

});
