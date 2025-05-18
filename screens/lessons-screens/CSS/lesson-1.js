import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import CSSsampleCode from '../../../assets/CSS/CSSsampleCodeImage.png'

const dataAnswer = [
  {id: 1, answer: 'To define the structure of a\nweb page'},
  {id: 2, answer: 'To style and format the layout\nof web pages'},
  {id: 3, answer: 'To add interactivity to a\nwebsite'},
  {id: 4, answer: 'To store data on the server'}
]

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson1(){
  const [checked, setChecked] = React.useState('');

  const HandleAnswer = () => {
    if (checked === 2) {
      Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1 || checked === 3 || checked === 4) {
      Alert.alert('Wrong!', 'You are wrong, try again.');
    } else {
      Alert.alert('Error!', 'Please select an answer.');
    }
  };

  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={styles.whole}>
        {/* what is html */}
        <Text style={styles.subTitle}>What is CSS?</Text>
        <Text style={styles.desc}>CSS stands for Cascading Style Sheets
          CSS describes how HTML elements are to be displayed on screen, paper, or in other media
          CSS saves a lot of work. It can control the layout of multiple web pages all at once
          External stylesheets are stored in CSS files</Text>

        {/*use of css */}
        <Text style={styles.subTitle}>Use of CSS</Text>
        <Text style={styles.desc}>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</Text>

        {/* sample code*/}
        <Text style={styles.subTitle}>A Sample CSS Document</Text>
        <Image style={styles.CSSsampleCodeImage} source={CSSsampleCode}/>

        {/* CSS element */}
        <Text style={styles.subTitle}>CSS Element</Text>
        <Text style={styles.desc}>A CSS element typically refers to an HTML element that is being styled using CSS. In CSS, you select HTML elements (like p, div, h1, etc.) and apply styles to them.</Text>



        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold'}}>What is the use of CSS?</Text>
          
          <FlatList
            data={dataAnswer}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value={item.id}
                  status={ checked === item.id ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(item.id)}
                  color='black'
                  uncheckedColor='white'
                />
                <Text style={{ paddingTop: 7, color: 'white', fontFamily: 'SpaceMono-Regular', fontSize: 12, paddingRight: 15 }}>{item.answer}</Text>          
              </View>
            )}
            scrollEnabled={false}
          />

          <TouchableOpacity 
            mode="contained" 
            onPress={HandleAnswer} 
            style={styles.submitButton}
            >
            
              <Text style={{fontFamily: 'NeueMontreal-Bold', fontSize: 14, textAlign: 'center'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        
        <PreviousNextButton screen1='CSS Screen' screen2='Lesson 2'/>
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
  CSSsampleCodeImage:{
    width: 320, 
    height: 200, 
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 10,
    borderRadius: 5
  },

  // element format
  tagFormatImage:{
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: 325,
    height: 30,
    borderRadius: 5,
    marginTop: 10
  },

  // web browsers pic
  webBrowserPic:{
    width: 325,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'stretch',
    borderRadius: 5,

  },

  
  // exercise
  exerciseContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 27,
    borderRadius: 5,
    marginHorizontal: 43,
    backgroundColor: '#00000080',
  },
  submitButton:{
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 8,
    paddingHorizontal: 15
  },
})