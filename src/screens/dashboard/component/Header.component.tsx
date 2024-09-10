import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import AddIcon from '../../../assets/icons/AddIcon.assets';
import AddItem from '../bottom-sheet/AddItem.bottomSheet';

const Header = () => {
  const handlePress = () => {
    global.showBottomSheet({
      flag: true,
      component: AddItem,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={typographies.poppinsSemiBold34}>Social Feed</Text>
      <TouchableOpacity onPress={handlePress}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexRow,
    ...customPadding(0, 20, 0, 20),
    justifyContent: 'space-between',
  },
});
