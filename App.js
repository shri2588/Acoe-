/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar  } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack'

const App = () => {
  return (
            <>


    <NavigationContainer>
     <AuthStack />
     {/* <AppStack /> */}
 
    </NavigationContainer>
    </>

  )
}


export default App;
