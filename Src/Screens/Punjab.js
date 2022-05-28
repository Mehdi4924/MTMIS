import React, {useState,useEffect} from 'react';
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
export default function Punjab(props) {
  const [loading, setLoading] = useState(false);
  const [navLoader, setnavLoader] = useState(false);
  const runFirst = `document.querySelector("div.modal-content").style.display = "none";
  document.querySelector("div.modal-content").remove();
  document.querySelector("div.modal-backdrop").remove();
  document.querySelector("header#navbar").style.display = "none";
  document.querySelector("ol.breadcrumb").style.display="none";
  document.querySelector("a.btn").style.display="none";
  document.querySelector("div.region.region-footer").style.display="none";
  document.getElementById("page-title").style.display = "none"
  `;
  useEffect(() => {
  }, [navLoader])
  
  return (
    <>
      <View style={styles.headermainView}>
      {navLoader==true&&
      <InterstitialAd />
}
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
          <Text style={styles.headerText}>PUNJAB</Text>
        </View>
        <Image
          source={require('../Assets/Images/slogo.png')}
          style={{height: 60, width: 80}}
        />
      </View>
      {console.log("check the state of laoder",navLoader)}
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
        source={{uri: 'https://mtmis.excise.punjab.gov.pk/'}}
        onNavigationStateChange={(state) =>{console.log('state change', state); setnavLoader(state.canGoBack)}}
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
