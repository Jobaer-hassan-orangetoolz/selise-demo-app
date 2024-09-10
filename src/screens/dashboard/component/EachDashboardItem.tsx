/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles/eachItemStyles';
import ImagePreview from '../../../components/image-preview/Index.component';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {globalStyles} from '../../../assets/styles/global.style.asset';
import {useDispatch} from 'react-redux';
import {loveItem} from '../../../redux/modules/dashboard/dashboard.slice.m';
interface _item {
  id: string | number;
  title: string;
  description: string;
  image: string;
  likes: number;
  createdAt: Date;
  profileImage: string;
  liked: boolean;
}
const EachDashboardItem = ({item, index}: {item: _item; index: number}) => {
  const {image, title, createdAt, profileImage, description, likes, liked} =
    item || {};
  const [loved, setLoved] = useState(liked);
  const dispatch = useDispatch();
  const handleLove = () => {
    dispatch(loveItem({index, status: loved ? true : false}));
    setLoved(!loved);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImagePreview
          source={{uri: profileImage}}
          styles={styles.imageContainer}
        />
        <View style={styles.headerText}>
          <Text style={typographies.poppinsBold16}>{title}</Text>
          <Text style={typographies.poppinsNormal14}>{`Posted ${new Date(
            createdAt,
          ).getMinutes()} minutes ago`}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ImagePreview source={{uri: image}} styles={styles.contentImage} />
        <Text style={typographies.poppinsNormal14}>{description}</Text>
      </View>
      <View style={[globalStyles.flexRow, {paddingLeft: 50}]}>
        <TouchableOpacity style={styles.loveClick} onPress={handleLove}>
          <Text
            style={[
              typographies.poppinsSemiBold14,
              {color: loved ? colors.pink : colors.black},
            ]}>
            {loved ? 'Loved' : 'Love'}
          </Text>
        </TouchableOpacity>
        <Text style={[typographies.poppinsSemiBold14, styles.loveClick]}>
          {`${likes} loves`}
        </Text>
      </View>
    </View>
  );
};

export default EachDashboardItem;
