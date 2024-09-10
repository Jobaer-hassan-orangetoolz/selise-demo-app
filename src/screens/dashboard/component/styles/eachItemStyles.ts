import {StyleSheet} from 'react-native';
import {customPadding} from '../../../../assets/styles/global.style.asset';
import {colors} from '../../../../assets/styles/colors.style.asset';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  headerText: {
    gap: 5,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  contentContainer: {
    ...customPadding(12, 0, 0, 50),
    gap: 12,
  },
  contentImage: {
    flexGrow: 1,
    borderRadius: 12,
    resizeMode: 'contain',
    width: '80%',
    justifyContent: 'flex-end',
    height: 300,
  },
  loveClick: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12,
    ...customPadding(10, 10, 10, 10),
    alignItems: 'center',
  },
});
export default styles;
