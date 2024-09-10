import {StyleSheet} from 'react-native';
import {customPadding} from '../../../assets/styles/global.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';

export const styles = StyleSheet.create({
  container: {
    ...customPadding(20),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(-15),
  },
  text: {
    ...typographies.poppinsSemiBold34,
    color: colors.pink,
    textAlign: 'center',
  },
});
