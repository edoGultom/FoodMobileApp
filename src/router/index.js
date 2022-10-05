import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FoodDetail, Home, Order, SuccessOrder, OrderSummary, Profile, SignIn, SignUp, SignUpAddress, SplashScreen, SuccessSignUp, OrderDetail } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    //custome buttom tab navigation https://reactnavigation.org/docs/bottom-tab-navigator
    return (
        <Tab.Navigator
            //return component for tabBar
            tabBar={props => <BottomNavigator {...props} />}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Order" component={Order} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} options={{ headerShown: false }} />

            {/* bottom Navigation */}
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />

            <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />
            <Stack.Screen name="OrderSummary" component={OrderSummary} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessOrder" component={SuccessOrder} options={{ headerShown: false }} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;