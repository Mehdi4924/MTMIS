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
export default function Islamabad(props) {
  const [loading, setLoading] = useState(true);
    const [navLoader, setnavLoader] = useState(false);
     useEffect(() => {
  }, [navLoader])
  const runFirst = `document.querySelector("div#BOTTOM").style.display = "none";
  document.querySelector("div#myModal.modalAnnounce").style.display = "none";  
  document.querySelector("table.hTable").style.display = "none";  
  document.querySelector("div.sp-slideshow").style.display = "none"; 
  document.getElementById('MyFrame')
  var type = document.querySelectorAll("button.dropbtn")
  for (var i = 0; i < type.length; i++) {
    if( i != 1){
        type[i].style.display = 'none';        
      }
    }
  var iframe = document.getElementById("MyFrame");
  iframe.contentWindow.document.querySelector("div#banner.row").style.display="none";
  iframe.contentWindow.document.querySelector("div#marketing.row").style.display="none";
  iframe.contentWindow.document.querySelector("div#page.row").style.display="none";
  var hrTag = iframe.contentWindow.document.getElementsByTagName("hr")
  for (var i = 0; i < hrTag.length; i++) {
    hrTag[i].style.display = 'none';        
  }
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta); 
  `;

  // TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  //   LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
  //   window.onscroll = function() {
  //   window.scrollTo(LeftScroll, TopScroll)}

  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.headermainView}>
        

        <View
          style={{width: hp(30), flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../Assets/Images/back.png')}
              style={{height: 35, width: 35}}
            />
          </Pressable>
          <Text style={styles.headerText}>ISLAMABAD</Text>
        </View>
        {console.log(loading)}
        <Image
          source={require('../Assets/Images/slogo.png')}
          style={{height: 60, width: 80}}
          resizeMode="cover"
        />
      </View>
      {loading == true ? (
        <View style={styles.activityView}>
        <InterstitialAd />
           {console.log("check the state of laoder",navLoader)}
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
          top: hp(8),
        }}
        source={{uri: 'http://www.islamabadexcise.gov.pk/'}}
       onNavigationStateChange={(state) =>{console.log('state change', state); setnavLoader(state.canGoBack)}}
        injectedJavaScript={runFirst}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scalesPageToFit={true}
        scrollEnabled={false}
      />
      {loading == false ? (
        <View style={styles.TextView}>
          <Text
            style={{
              fontFamily: 'Nexa Bold',
              textAlign: 'center',
              color: '#571F4E',
            }}>
            Head To Top Menu and Click Check Vehicle Details under Vehcile
            Registration
          </Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
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
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(85),
    height: hp(7),
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    marginVertical: hp(1),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F759B',
  },
  btnView: {
    alignItems: 'center',
    width: wp(85),
    height: hp(7),
    alignSelf: 'center',
    backgroundColor: '#571F4E',
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(5),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F759B',
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
  TextView: {
    position: 'absolute',
    zIndex: 1000,
    width: wp(80),
    height: hp(20),
    top: hp(2),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
