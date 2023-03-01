import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //auto login=>cek token di asyn storage
      getData('token').then(res => {
        console.log('token', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View
        style={{
          height: 30,
        }}
      />
      <Text
        style={{
          fontSize: 32,
          color: '#020202',
          fontFamily: 'Poppins-Medium',
        }}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
