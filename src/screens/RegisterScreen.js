/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {Checkbox} from 'react-native-paper';

const RegisterScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [data, setdata] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setdata({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setdata({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setdata({
      ...data,
      password: val,
    });
  };

  const updateTextSecureEntry = () => {
    setdata({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/back.png')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text_header}> Register Now!</Text>
      </View>
      <ScrollView>
        <View style={styles.footer}>
          <Text
            style={[
              styles.text_footer,
              {
                color: 'red',
                fontSize: 12,
                marginBottom: 10,
                fontWeight: 'bold',
              },
            ]}>
            * Mandatory fields
          </Text>
          <Text style={styles.text_footer}>
            What is Your Name{' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
          </Text>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            {' '}
            What is Your Mobile Number{' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome name="mobile-phone" color="#05375a" size={30} />
            <TextInput
              placeholder="Mobile Number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            What is Your Aadhar Number{' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome name="location-arrow" color="#05375a" size={25} />
            <TextInput
              placeholder="Enter Full Address "
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Pincode <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome5 name="search-location" color="#05375a" size={25} />
            <TextInput
              placeholder="Enter Pincode "
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Email <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome5 name="at" color="#05375a" size={25} />
            <TextInput
              placeholder="Enter your email "
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Password <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateTextSecureEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />

            <Text style={styles.label}>
              I agree with the terms and conditions and the privacy policy
            </Text>
          </View>

          <View style={styles.button}>
            <LinearGradient
              colors={['#006DB7', 'rgba(8, 212, 196, 1)']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign Up
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 7,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 301,
    position: 'absolute',
    resizeMode: 'cover',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 13,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 0,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
});
