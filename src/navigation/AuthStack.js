import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'
import RegisterScreen from '../screens/RegisterScreen';
const Stack = createNativeStackNavigator();

const  AuthStack= () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={SplashScreen} name='SplashScreen'  />
        <Stack.Screen component={LoginScreen} name='LoginScreen'  />
        <Stack.Screen component={RegisterScreen} name='RegisterScreen'  />
      </Stack.Navigator>
    )
}


export default  AuthStack;