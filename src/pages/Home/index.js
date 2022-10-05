import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProfile, HomeTabSection } from '../../components';
import { getFood } from '../../redux/action';

const Home = () => {
    const { foods } = useSelector(state => state.homeReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFood())
    }, [])

    return (
        <View style={styles.page}>
            <HomeProfile />

            {/* content */}
            <View style={styles.tabContainer}>
                <HomeTabSection foods={foods} />
            </View>

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: { flex: 1 },
    tabContainer: { flex: 1 },
});
