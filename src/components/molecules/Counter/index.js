import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcBtnMin, IcBtnPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: 'rgb(224, 224, 224)',
          borderless: false,
          foreground: true,
        }}
        onPress={() => onCount('minus')}>
        <IcBtnMin />
      </Pressable>
      <Text style={styles.value}>{value}</Text>
      <Pressable
        android_ripple={{
          color: 'rgb(224, 224, 224)',
          borderless: false,
          foreground: true,
        }}
        onPress={() => onCount('plus')}>
        <IcBtnPlus />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
