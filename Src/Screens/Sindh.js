import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
import InterstitialAd from '../Componets/InterstitialAd';
export default function Sindh(props) {
  const [loading, setLoading] = useState(false);
  const runFirst = `document.querySelector("div.header_bg_full").style.display = "none";
  document.querySelector("div.row").style.display = "none";
  document.querySelector("div.menu_bg_full").style.display = "none";
  document.querySelector("div.inner_header.mb-3").style.display = "none";
  document.querySelector("ol.breadcrumb").style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector("div.block_bg.sidebar_height").style.display = "none";
  document.querySelector("div.footer_bg_full").style.display = "none";
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta); 
  `
  return (
    <>
      <View style={styles.headermainView}>
        <View
          style={{
            width: hp(30),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../Assets/Images/back.png')}
              style={{height: 35, width: 35}}
            />
          </Pressable>
          <Text style={styles.headerText}>SINDH</Text>
        </View>
        <Image
          source={require('../Assets/Images/slogo.png')}
          style={{height: 60, width: 80}}
        />
      </View>
      {loading == true ? (
        <View style={styles.activityView}>
         <InterstitialAd />
          <ActivityIndicator
            size="large"
            color={'#571F4E'}
            style={{alignSelf: 'center'}}
          />
        </View>
      ) : null}
      <WebView
        style={{
          flex: 1,
          // alignSelf: 'center',
        }}
        source={{uri: 'https://excise.gos.pk/vehicle/vehicle_search'}}
        injectedJavaScript={runFirst}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        scalesPageToFit={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headermainView: {
    flexDirection: 'row',
    height: hp(8),
    width: wp(100),
    backgroundColor: '#571F4E',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
  },
  headerText: {
    color: '#fff',
    fontSize: hp(3),
    fontFamily: 'Nexa Bold',
    marginLeft: 30,
  },
  imageView: {
    height: hp(40),
    width: wp(90),
    alignItems: 'center',
    //   backgroundColor:'pink',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  activityView: {
    position: 'absolute',
    zIndex: 1000,
    width: wp(100),
    height: hp(100),
    top: hp(8),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
