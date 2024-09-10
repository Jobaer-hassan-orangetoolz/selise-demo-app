import { View, Text } from 'react-native';
import React from 'react';
import { fonts } from '../../assets/styles/fonts.style.asset';

const AScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 70, fontFamily: fonts.poppins500}}>AScreen</Text>
    </View>
  );
};

export default AScreen;
