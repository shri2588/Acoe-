/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  Dimensions,
  Pressable,
  Modal,
  ScrollView,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const THEME_COLOR = '#2c3e50';
const LoginScreen = ({ navigation }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
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

  const handlePasswordChange = (val) => {
    setdata({
      ...data,
      password: val,

    });
  }

  const updateTextSecureEntry = () => {

    setdata({
      ...data,
      secureTextEntry: !data.secureTextEntry

    });

  }

  return (
    <>
    <StatusBar backgroundColor={THEME_COLOR} barStyle="white-content"   />
    <View style={styles.container}>
     
      <View style={styles.header}>
       
        <View style={{
                        flex: 1, flexDirection: 'row', marginTop: 15, padding: 10

                    }}>

                        <View style={{ width: 50, height: 150, backgroundColor: 'none', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                            <Image
                                source={require("../assets/images/user-profile.jpg")}
                                style={{ flex: 1, width: '100%', height: '100%',  resizeMode:'cover',borderTopRightRadius: 15, borderBottomRightRadius: 15,borderTopLeftRadius: 15, borderBottomLeftRadius: 15  }}
                            />
                        </View>


                        <View style={{ width: 50, height: 150, backgroundColor: 'none', flex: 4, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >
                        <Text style={{color:'#fff', fontSize:18, paddingLeft:20,fontWeight:"bold"}}>
                        Student Accommodation in abroad..
                        </Text>
                        
                        <View>
                        <Text style={{color:'#fff', fontSize:15, paddingLeft:20}}>
                                (It's free service for enquiry to accommodation in abroad)
                        </Text>
                        </View>
                        <View>
                        <Text style={{color:'#fff', fontSize:15, paddingLeft:20, fontWeight:"bold"}}>
                            Across Continent Overseas Education
                        </Text>
                        </View>
                        </View>

                    </View>

        
      </View>

      <Animatable.View
        animation="pulse"
        style={styles.footer}>
        <Text style={[styles.text_footer, {
          color: 'red',
          fontSize: 12,
          marginBottom: 10,
          fontWeight: 'bold'
        }]}>* Mandatory fields</Text>
        <ScrollView>
        <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            {' '}
            What is Your Name {' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={25} />
            <TextInput
              placeholder="Full Name "
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
            {' '}
            What is Your Aadhar Number{' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome name="id-card-o" color="#05375a" size={25} />
            <TextInput
              placeholder="Aadhar Number"
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
            {' '}
            What is Your Email {' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>{' '}
          </Text>
          <View style={styles.action}>
            <FontAwesome name="at" color="#05375a" size={25} />
            <TextInput
              placeholder="Email "
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>
          

         
        </ScrollView>
        <View style={styles.button}>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Feather name="check-circle" color="green" size={50} />
            <Text style={styles.modalText}>Your request is submitted successfully</Text>
            <Pressable
              style={[styles.buttonC, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>
              <Ionicons name="close-circle" color="red" size={45} />
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
       
      </Pressable>
    </View>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <LinearGradient
              colors={['#006DB7', 'rgba(8, 212, 196, 1)']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>
                Submit Details
              </Text>
            </LinearGradient>
          </TouchableOpacity>
         


        </View>

      </Animatable.View>
    </View>
    </>
  );
};

export default LoginScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 301,
    position: 'absolute',
    resizeMode: 'cover'
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
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
    marginTop: 50,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
   
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:25
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  buttonC: {
   
  },
});
