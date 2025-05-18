import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson4(){
  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={styles.whole}>
        {/* what is lesson 4 */}
        <Text style={styles.subTitle}>Navigation Between Screens</Text>
        <Text style={styles.desc}>Most apps today use multiple screens — like a Home screen, a Settings screen, or a Profile screen. In React Native, switching between these screens is handled by a library called React Navigation. This lesson focuses on how to add navigation to your app, move between screens, and pass data when needed.</Text>

        {/* react nav */}
        <Text style={styles.subTitle}>What is React Navigation?</Text>
        <Text style={styles.desc}><Text style={{color: 'red'}}>React Navigation </Text> is the most popular library for handling navigation in React Native.</Text>
        <Text style={styles.desc}>It helps you create routes, move between screens, and manage screen history (like going back).</Text>
        <Text style={styles.desc}>The most basic navigation type is the Stack Navigator, where screens are stacked like cards — new ones are pushed on top, and you can go back to the previous ones.</Text>

        {/* setup nav */}
        <Text style={styles.subTitle}>Setting Up Navigation</Text>
        <Text style={styles.desc}>You first install <Text style={{color: 'red'}}>@react-navigation/native </Text> and a few dependencies to make navigation work.</Text>
        <Text style={styles.desc}>Then, you define different screens inside a Navigator and assign them names like <Text style={{color: 'red'}}>Home </Text>or <Text style={{color: 'red'}}>Details</Text></Text>
        <Text style={styles.desc}>You can now use <Text style={{color: 'red'}}>navigation.navigate('ScreenName') </Text> to switch between screens.</Text>

        {/* passing data */}
        <Text style={styles.subTitle}>Passing Data Between Screens</Text>
        <Text style={styles.desc}>When you navigate, you can also send data along — like passing the user’s name or selected item.</Text>
        <Text style={styles.desc}>The next screen can read the data using the <Text style={{color: 'red'}}>route </Text>object or specifically <Text style={{color: 'red'}}>route.params</Text></Text>

        <PreviousNextButton screen1='Lesson 3' screen2='Lesson 5'/>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'     
  },
  // whole screen
  whole:{
    flex: 1,
  },

  // title
  title:{
    fontFamily: 'Rockwell',
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: 'white'
  },

  // sub title
  subTitle:{
    fontFamily: 'NeueMontreal-Bold',
    fontSize: 20,
    paddingHorizontal: 35,
    paddingTop: 10,
    color: 'white'
  },

  // description
  desc:{
    fontFamily: 'SpaceMono-Regular',
    fontSize: 12,
    paddingHorizontal: 45,
    paddingTop: 10,
    textAlign: 'justify',
    color: 'white'
  },

  // Sample code
  sampleCodeImage:{
    width: 320, 
    height: 200, 
    alignSelf: 'center', 
    resizeMode: 'contain', 
    marginTop: 10,
  },

  // element format
  tagFormatImage:{
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 330,
    height: 50
  },

  // web browsers pic
  webBrowserPic:{
    width: 330,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain'
  },

  
  // exercise
  exerciseContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 27,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#00000090',
  },
  submitButton:{
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10
  },
})