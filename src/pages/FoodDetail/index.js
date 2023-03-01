import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';
import {useEffect} from 'react';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  //params yag dikirim dari home
  const {id, name, picturePath, description, ingredients, rate, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    // key dan value sama tinggal panggil seperti ini
    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile, //langsung membuat object
    };
    navigation.navigate('OrderSummary', data);
  };
  return (
    <View style={styles.page}>
      {/* jika ada image yg didalamnya ada content maka gunakan komponen ini */}
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <Pressable
          android_ripple={{
            color: 'rgb(224, 224, 224)',
            borderless: false,
            foreground: true,
          }}
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </Pressable>
      </ImageBackground>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>

            {/* kalau valuenya berubah kirimkan callback biar dipakai di onCounterChange  */}
            <Counter onValueChange={onCounterChange} />
          </View>

          <Text style={styles.description}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.description}>{ingredients}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.labelPrice} />
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  button: {
    width: 163,
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  labelPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  },
});
