import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,Share,Linking,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AdBanner from '../Componets/AdBanner'
export default function Home(props) {
  return (
    <View style={styles.mainContainer}>
    <View style={{width:'100%',height:hp(10)}}>
    <AdBanner />
    </View>
      <View style={styles.headermainView}>
        <Text style={styles.headerText}>MTMIS Pakistan</Text>
        <Image
          source={require('../Assets/Images/slogo.png')}
          style={{height: 60, width: 80}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondView}>
          <Image
            source={require('../Assets/Images/homecar.png')}
            style={{height: hp(32), width: hp(45)}}
          />
          <Text style={styles.Text2}>
            Vehicle Registration{'\n'}Details Around Pakistan
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: hp(5),
          }}>
          <Pressable
            style={styles.thirdView}
            onPress={() => props.navigation.navigate('Punjab')}>
            <Image
              source={require('../Assets/Images/minar.png')}
              style={{height: 50, width: 100}}
              resizeMode="center"
            />
            <Text style={styles.Text3}>Punjab</Text>
          </Pressable>
          <Pressable
            style={styles.thirdView}
            onPress={() => props.navigation.navigate('Sindh')}>
            <Image
              source={require('../Assets/Images/Sindh.png')}
              style={{height: 60, width: 90}}
              resizeMode="center"
            />
            <Text style={styles.Text3}>SINDH</Text>
          </Pressable>
          <Pressable
            style={styles.thirdView}
            onPress={() => props.navigation.navigate('Islamabad')}>
            <Image
              source={require('../Assets/Images/mosque.png')}
              style={{height: 60, width: 90}}
              resizeMode="center"
            />
            <Text style={styles.Text3}>Islamabad</Text>
          </Pressable>
          <Pressable
            style={styles.thirdView}
            onPress={() => props.navigation.navigate('Khyber')}>
            <Image
              source={require('../Assets/Images/khyeber.png')}
              style={{height: 60, width: 90}}
              resizeMode="center"
            />
            <Text style={styles.Text3}>KHYBER PK</Text>
          </Pressable>
        </View>
        <TouchableOpacity onPress={()=>{
            let url =
        "https://play.google.com/store/apps/details?id=com.mtmis"
        Linking.openURL(url)
        }} style={styles.buttonView}>
          <Text style={styles.Text4}>Rate this app now</Text>
          <Image
            source={require('../Assets/Images/star.png')}
            style={{height: 30, width: 40}}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
                  Share.share(
                    {
                      title: 'MTMIS APP',
                      message:`Here is the platform where you get the all information about Vehical by adding the plate number Join the link to Install the app ${'https://play.google.com/store/apps/details?id=com.mtmis'}`, // Note that according to the documentation at least one of "message" or "url" fields is required
                      url: 'https://www.whatsapp.com/',
                      subject:
                        'Get Information about your vehical using MTMIS app',
                    },
                    {
                      // Android only:
                      dialogTitle: 'Share the app',
                      // iOS only:
                      excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter',
                      ],
                    },
                  );
                }}
                     style={[styles.buttonView, {marginBottom: hp(5)}]}>
          <Text style={styles.Text4}>Share this app now</Text>
          <Image
            source={require('../Assets/Images/share.png')}
            style={{height: 33, width: 30}}
            resizeMode="center"
          />
        </TouchableOpacity>
      </ScrollView>
          <AdBanner />
    </View>
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
  },
  secondView: {
    width: wp(90),
    height: hp(50),
    alignItems: 'center',
    // backgroundColor:'red',
    justifyContent: 'center',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  Text2: {
    color: '#571F4E',
    fontSize: hp(3),
    textAlign: 'center',
    fontFamily: 'NESA',
    marginTop: hp(4),
    fontFamily: 'NexaRegular',
  },
  thirdView: {
    height: hp(15),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 10,
    margin: 5,
  },
  Text3: {
    fontSize: hp(3),
    fontFamily: 'NexaRegular',
    color: '#571F4E',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(85),
    height: hp(7),
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: hp(1),
    borderRadius: 10,
  },
  Text4: {
    fontSize: hp(2.5),
    fontFamily: 'NexaRegular',
    color: '#571F4E',
  },
});
