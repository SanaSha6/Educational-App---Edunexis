import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity, Platform } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// images
import sampleCode from '../../../assets/HTML/lesson1-sample-code.png'
import tagFormat from '../../../assets/HTML/tag-format.png'
import webBrowserPic from '../../../assets/HTML/web-browsers.png'

const dataAnswer = [
  {id: 1, answer: 'Hot Typing Markup Language'},
  {id: 2, answer: 'Home Typing Modern Language'},
  {id: 3, answer: 'Hyper Text Markup Language'},
  {id: 4, answer: 'Home Testing Mixed Language'}
]

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson1(){
  const [checked, setChecked] = React.useState('');

  const HandleAnswer = () => {
    if (checked === 3) {
      Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1 || checked === 2 || checked === 4) {
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
      <StatusBar style="light"/>
      <ScrollView style={styles.whole}>
        {/* wat is html */}
        <Text style={styles.subTitle}>What is HTML?</Text>
        <Text style={styles.desc}>HTML, short for HyperText Markup Language, is the fundamental language used to create the structure and content of web pages. It uses a system of tags to define elements like headings, paragraphs, images, and links, telling web browsers how to display them</Text>

        {/*use of html */}
        <Text style={styles.subTitle}>Use of HTML</Text>
        <Text style={styles.desc}>Primary use of HTML i s to structure and present content on the World Wide Web. It provides the basic framework for all websites, defining the meaning and organization of text, images, videos, and other elements so that web browsers can display them correctly. Think of it as the blueprint for a webpage.</Text>

        {/* sample code*/}
        <Text style={styles.subTitle}>A Sample HTML Document</Text>
        <Image style={styles.sampleCodeImage} source={sampleCode}/>
        <Text style={[styles.subTitle, {fontSize: 17}]}>Example Explained:</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>!DOCTYPE html</Text> declaration defines that this document is an HTML5 document.</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>html</Text> element is the root element of an HTML page.</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>head</Text> element contains meta information about the HTML page.</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>title</Text> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).</Text>
          <Text style={[styles.desc, {marginBottom: -18}]}>{'\u2022'} The <Text style={{color: 'red'}}>body</Text> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>h1</Text> element defines a large heading.</Text>
          <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>p</Text> element defines a paragraph.</Text>

        {/* html element */}
        <Text style={styles.subTitle}>HTML Element</Text>
        <Text style={styles.desc}>An HTML element is defined by a start tag, some content, and an end tag.</Text>
        <Image style={[styles.tagFormatImage, {marginBottom: Platform.OS === 'ios' ? -13: 0}]} source={tagFormat}/>

        {/* web browsers */}
        <Text style={styles.subTitle}>Web Browsers</Text>
        <Text style={styles.desc}>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. A browser does not display the HTML tags, but uses them to determine how to display the document.</Text>

        <Image style={[styles.webBrowserPic, {marginTop: 17}]} source={webBrowserPic}/>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold'}}>What does HTML stands for?</Text>
          
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
                  uncheckedColor={Platform.OS === 'ios' ? 'black' : 'white'}
                  style={{backgroundColor: Platform.OS === 'ios' ? 'white' : 'transparent'}}
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
        
        <PreviousNextButton screen1='HTML Screen' screen2='Lesson 2'/>
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