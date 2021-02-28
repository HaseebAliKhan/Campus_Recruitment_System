import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLogin from './HomeLogin';
import AdminLogin from './AdminLogin';
import StudentLogin from './StudentLogin';
import StudentSignUp from './StudentSignUp';
import CompanyLogin from './CompanyLogin';
import CompanySignUp from './CompanySignUp';
import {Provider} from 'react-redux'
import store from '../store'


const Stack = createStackNavigator();

function Navigation(){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeLogin" headerMode='none'>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {}
});

export default Navigation;