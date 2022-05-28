import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Splash(props) {
  setTimeout(() => {
    props.navigation.replace('Home');
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FbFbFb',
      }}>
      <Image
        source={require('../Assets/Images/Logo.gif')}
        style={{height: hp(50), width: wp(90)}}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
