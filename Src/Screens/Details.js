import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Islamabad(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headermainView}>
        <View
          style={{width: hp(35), flexDirection: 'row', alignItems: 'center'}}>
         <Pressable onPress={()=>props.navigation.goBack()}>
         <Image
            source={require('../Assets/Images/back.png')}
            style={{height: 35, width: 35}}
          />
         </Pressable>
          <Text style={styles.headerText}>Verification Results</Text>
        </View>
        <Image
          source={require('../Assets/Images/slogo.png')}
          style={{height: 60, width: 80}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: wp(90),
            height: hp(12),
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#fff',
            elevation: 3,
            marginVertical: hp(3),
            borderRadius: 10,
          }}>
          <Image
            source={require('../Assets/Images/CAR1803.png')}
            style={{height: 60, width: 100, marginHorizontal: 20}}
          />
          <Text style={{color: '#4F759B', fontSize:hp(3),
    fontFamily:'Nexa Bold',}}>BJF-1234</Text>
        </View>
        <View style={styles.personalInfoView}>
          <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Owner Name</Text>
            <Text style={styles.Text1}>Usman Arif</Text>
          </View>
          <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Father Name</Text>
            <Text style={styles.Text1}>Muhammad Arif</Text>
          </View>
          <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Owner City</Text>
            <Text style={styles.Text1}>Lahore</Text>
          </View>
          <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Tax Payment</Text>
            <Text style={styles.Text1}>March 2022</Text>
          </View>
        </View>
        <View style={styles.carInfoView}>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Make/Maker</Text>
            <Text style={styles.Text1}>Toyota</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Vehicle Model</Text>
            <Text style={styles.Text1}>Corolla</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Model Year</Text>
            <Text style={styles.Text1}>2019</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Engine No</Text>
            <Text style={styles.Text1}>Z212121212</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Horse Power</Text>
            <Text style={styles.Text1}>1299</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Body Type</Text>
            <Text style={styles.Text1}>Soloon</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Seating Capacity</Text>
            <Text style={styles.Text1}>4</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>Registration Date</Text>
            <Text style={styles.Text1}>Dec 31,2019</Text>
          </View>
        <View style={styles.personalInfoSecondView}>
            <Text style={styles.Text1}>CPLC</Text>
            <Text style={styles.Text1}>Clear</Text>
          </View>
        </View>
        <Image
              source={require('../Assets/Images/car.png')}
              style={{height:100, width:100,alignSelf:'center',marginVertical:hp(4)}}
              resizeMode='center'
            />
            <Text style={{fontSize:hp(2.5),textAlign:'center',marginBottom:hp(4),color:'#571F4E',fontFamily:'Nexa Bold',}}>
              This Vehicle Is Clear In Registration{'\n'}Terms And Condtions </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  headermainView: {
    flexDirection: 'row',
    height: hp(8),
    width: wp(100),
    backgroundColor: '#571F4E',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    alignSelf:'center'
  },
  headerText: {
    color: '#fff',
    fontSize:hp(3),
    fontFamily:'Nexa Bold',
    marginLeft:20
  },
  personalInfoView: {
    width: wp(90),
    alignSelf: 'center',
    height: hp(28),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F759B',
  },
  personalInfoSecondView: {
    flexDirection: 'row',
    width: wp(85),
    height: hp(6),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:0.5,
    borderColor: '#4F759B',
  },
  carInfoView: {
    width: wp(90),
    alignSelf: 'center',
    height: hp(58),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F759B',
    marginVertical:hp(2)
  },
  Text1:{
    fontFamily:'NexaRegular'
  }
});
