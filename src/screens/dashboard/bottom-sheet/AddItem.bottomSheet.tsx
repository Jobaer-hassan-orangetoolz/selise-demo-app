import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {customPadding} from '../../../assets/styles/global.style.asset';
import InputWithIcon from '../../../components/text-input/InputWithIcon.core.component';
import CustomButton from '../../../components/button/CustomButton.component';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {useDispatch} from 'react-redux';
import {addItem} from '../../../redux/modules/dashboard/dashboard.slice.m';
import isEmpty from '../../../helpers/utilities/isEmpty.utility';
import showAlertWithOneAction from '../../../helpers/utilities/showAleartWithOneAction.utility';
const randomImageData = [
  'https://images.unsplash.com/photo-1724893973738-a80d90811389?w=100&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1725109432339-d4c815f517bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1724893973738-a80d90811389?w=100&auto=format&fit=crop&q=60',
];
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * randomImageData.length);
  return randomImageData[randomIndex];
};
const AddItem = () => {
  const [status, setStatus] = useState('');
  const [title, setTitle] = useState('');
  const handleChange = (text: string, name: string) => {
    if (name === 'title') {
      setTitle(text);
    }
    if (name === 'status') {
      setStatus(text);
    }
  };
  const dispatch = useDispatch();
  const handlePress = () => {
    //validation
    if (isEmpty(title)) {
      return showAlertWithOneAction({
        title: 'something went wrong',
        body: 'title must be filled up',
      });
    }
    if (isEmpty(status)) {
      return showAlertWithOneAction({
        title: 'something went wrong',
        body: 'status must be filled up',
      });
    }

    //submit the post
    const createdAt = new Date();
    const payload = {
      id: Math.random().toString,
      title: title,
      description: status,
      likes: 0,
      liked: false,
      createdAt: createdAt.toISOString(),
      image: getRandomImage(), //random image to simplification
      profileImage: getRandomImage(),
    };
    dispatch(addItem(payload));
    global.showBottomSheet({flag: false});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submit a post</Text>
      <InputWithIcon
        placeholder="Post title"
        label="Title"
        onChangeText={(text: string) => {
          handleChange(text, 'title');
        }}
      />
      <InputWithIcon
        placeholder="Post status"
        label="Status"
        onChangeText={(text: string) => {
          handleChange(text, 'status');
        }}
      />
      <TouchableOpacity
        style={styles.imageVideo}
        onPress={() => {
          return showAlertWithOneAction({
            title: 'Please fill up the rests',
            body: 'Image will be auto generated',
          });
        }}>
        <Text style={typographies.poppinsMedium20}>Upload Image/Video</Text>
      </TouchableOpacity>
      <CustomButton onPress={handlePress} text="Post" />
    </View>
  );
};

export default AddItem;
const styles = StyleSheet.create({
  container: {
    ...customPadding(24, 20, 40, 20),
    gap: 24,
  },
  imageVideo: {
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.iconLightBrown,
    ...customPadding(12, 12, 12, 12),
    borderRadius: 12,
  },
  header: {
    ...typographies.poppinsSemiBold20,
    textAlign: 'center',
  },
});
