/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {typographies} from '../../assets/styles/typographies.style.asset';
import ImagePreview from '../../components/image-preview/Index.component';

const ProfileIndex = () => {
  return (
    <View style={styles.container}>
      <ImagePreview
        styles={styles.image}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
        }}
      />
      <Text style={typographies.poppinsSemiBold24}>John Doe</Text>
      <Text style={[typographies.poppinsNormal14, {textAlign: 'center'}]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit
        harum iure quam necessitatibus ad consectetur velit numquam! Nesciunt
        voluptates tempore totam ipsam. Nihil reiciendis neque, vel enim ipsam
        animi quidem dicta quibusdam iure quaerat repudiandae possimus doloribus
        doloremque a beatae exercitationem temporibus odit voluptatum adipisci
        quasi obcaecati dignissimos. Suscipit?
      </Text>
    </View>
  );
};

export default ProfileIndex;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
  },
  image: {
    borderRadius: 100,
    height: 200,
    width: 200,
  },
});
