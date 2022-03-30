import React from 'react';
import {  View,Text, TouchableOpacity,Dimensions,StyleSheet,Image, ImageBackground, StatusBar} from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
const THEME_COLOR = '#f907fc';
const  SplashScreen= ({navigation}) => {
    return(
        <>

<StatusBar backgroundColor={THEME_COLOR} barStyle="white-content"   />
        <View style={styles.container}>
     
        <View style={styles.header}>
        <ImageBackground source={require('../assets/images/back.png')} resizeMode="cover" style={styles.image}>        
    </ImageBackground>
    <Animatable.Image
           animation="bounceIn"
          
           source={require('../assets/logo.png')}
           style={styles.logo}
           resizeMode="stretch"
            />


           {/*  */}
        </View>
        <Animatable.View style={styles.footer}
          animation="fadeInUpBig"
        
          >
            <Text style={styles.title}>
               Request For Accommodation to ACOE..
            </Text>
            <Text style={styles.text}>
               Start Your Process
            </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <LinearGradient
             colors={['#006DB7', 'rgba(8, 212, 196, 1)']}
             style={styles.signIn}

            >
                <Text style={styles.textSign}>
                    Get Started
                </Text>
                <MaterialIcons 
                 name="navigate-next"
                 color='#fff'
                 size={20}
                 />
            </LinearGradient>

            </TouchableOpacity>
            </View>
        </Animatable.View> 
           
        </View>
        </>
        
    )
}
/* Rectangle 15 */


export default  SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
  
      
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
       
    },
    title: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }, 
    image: {
       width:414,
       height:1301,
       position:'absolute'
        
      },
  });