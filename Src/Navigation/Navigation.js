import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import Islamabad from '../Screens/Islamabad';
import Punjab from '../Screens/Punjab';
import Sindh from '../Screens/Sindh';
import Khyber from '../Screens/Khyber';
import Details from '../Screens/Details';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Islamabad" component={Islamabad} />
        <Stack.Screen name="Punjab" component={Punjab} />
        <Stack.Screen name="Sindh" component={Sindh} />
        <Stack.Screen name="Khyber" component={Khyber} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;