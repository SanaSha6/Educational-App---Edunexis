import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Alert, TouchableOpacity, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper'

// images
import DocExample from '../../../assets/HTML/lesson3-example.png'
import HeadingsExample from '../../../assets/HTML/lesson3-headings-example.png'
import ParagraphsExample from '../../../assets/HTML/lesson3-paragraphs-example.png'
import LinksExample from '../../../assets/HTML/lesson3-links-example.png'
import ImagesExample from '../../../assets/HTML/lesson3-images-example.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
  {id: 1, answer: '<!DOCTYPE html>'},
  {id: 2, answer: 'DOCTYPE html;'},
  {id: 3, answer: '--DOCTYPE html;'},
  {id: 4, answer: '<DOCTYPE html!>'}
]

export default function lesson3(){
const [checked, setChecked] = React.useState('');

const HandleAnswer = () => {
  if (checked === 1) {
    Alert.alert('Correct!', 'You are correct!');
  } else if (checked === 2 || checked === 3 || checked === 4) {
    Alert.alert('Wrong!', 'You are wrong, try again.');
  } else {
    Alert.alert('Error!', 'Please select an answer.');
  }
};

  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>
      
      <ScrollView style={{flex: 1}}>
        <Text style={styles.desc}>In this chapter we will show some basic HTML examples.</Text>
        <Text style={styles.desc}>Don't worry if we use tags you have not learned about yet.</Text>

        {/* html documents */}
        <Text style={styles.subTitle}>HTML Documents</Text>
        <Text style={[styles.desc, {marginBottom: -14}]}>All HTML documents must start with a document type declaration: <Text style={{color: 'red'}}>!DOCTYPE html</Text>.</Text>
        <Text style={styles.desc}>The HTML document itself begins with <Text style={{color: 'red'}}>html</Text> and ends with <Text style={{color: 'red'}}>/html</Text>.</Text>
        <Text style={styles.desc}>The visible part of the HTML document is between <Text style={{color: 'red'}}>body</Text> and <Text style={{color: 'red'}}>/body</Text>.</Text>

        <Text style={[styles.desc, {fontSize: 20}]}>Example:</Text>
        <Image style={[styles.image, {marginTop: Platform.OS === 'ios' ? -10 : 10}]} source={DocExample}/>

        {/* <!DOCTYPE> */}
        <Text style={[styles.subTitle, {paddingTop: 0}]}>The !DOCTYPE Declaration</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>!DOCTYPE</Text> declaration represents the document type, and helps browsers to display web pages correctly.</Text>
        <Text style={styles.desc}>It must only appear once, at the top of the page (before any HTML tSags).</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>!DOCTYPE</Text> declaration is not case sensitive.</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>!DOCTYPE</Text> declaration for HTML5 is:</Text>

        {/* HTML headings */}
        <Text style={styles.subTitle}>HTML Headings</Text>
        <Text style={styles.desc}>HTML headings are defined with the  <Text style={{color: 'red'}}>h1</Text> to  <Text style={{color: 'red'}}>h6</Text> tags.</Text>
        <Text style={styles.desc}><Text style={{color: 'red'}}>h1</Text> defines the most important heading. <Text style={{color: 'red'}}>h6</Text> defines the least important heading: </Text>

        <Image style={[styles.image, {height: 70}]} source={HeadingsExample}/>

        {/* html paragraphs */}
        <Text style={styles.subTitle}>HTML Paragraphs</Text>
        <Text style={styles.desc}>HTML paragraphs are defined with the <Text style={{color: 'red'}}>p</Text> tag:</Text>

        <Image style={[styles.image, {height: 55}]} source={ParagraphsExample}/>

        {/* HTML links */}
        <Text style={styles.subTitle}>HTML Links</Text>
        <Text style={styles.desc}>HTML links are defined with the <Text style={{color: 'red'}}>a</Text> tag:</Text>

        <Image style={[styles.image, {height: 40, marginTop: 10}]} source={LinksExample}/>

        <Text style={styles.desc}>The link's destination is specified in the <Text style={{color: 'red'}}>href</Text> attribute.</Text>
        <Text style={styles.desc}>Attributes are used to provide additional information about HTML elements.</Text>
        <Text style={styles.desc}>You will learn more about attributes in a later chapter.</Text>

        {/* HTML images */}
        <Text style={styles.subTitle}>HTML Images</Text>
        <Text style={styles.desc}>HTML images are defined with the <Text style={{color:'red'}}>img</Text> tag.</Text>
        <Text style={styles.desc}>The source file <Text style={{color: 'red'}}>(src)</Text>, alternative text <Text style={{color: 'red'}}>(alt)</Text>, <Text style={{color: 'red'}}>width</Text>, and <Text style={{color: 'red'}}>height</Text> are provided as attributes:</Text>

      <Image style={[styles.image, {height: 20, marginTop: 15}]} source={ImagesExample}/>

      {/* viewing of HTML source */}
      <Text style={styles.subTitle}>How to View HTML Source</Text>
      <Text style={styles.desc}>Have you ever seen a Web page and wondered "Hey! How did they do that?"</Text>
      <Text style={[styles.desc, {fontSize: 18}]}>View HTML Source Code:</Text>
      <Text style={styles.desc}>Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.</Text>
      <Text style={[styles.desc, {fontSize: 18}]}>Inspect an HTML Element:</Text>
      <Text style={styles.desc}>Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, textAlign: 'center', fontFamily: 'IBMPlexMono-Bold'}}>What is a correct HTML markup {'\n'} for the document type declaration?</Text>
          
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
                <Text style={{ paddingTop: 7, color: 'white', fontFamily: 'SpaceMono-Regular', paddingRight: 20 }}>{item.answer}</Text>          
              </View>
            )}
            scrollEnabled={false}
          />

          <TouchableOpacity 
            mode="contained" 
            onPress={HandleAnswer} 
            style={styles.submitButton}
            labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular'}}
            >
            
              <Text style={{fontFamily: 'NeueMontreal-Bold', fontSize: 14, textAlign: 'center'}}>Submit</Text>
          </TouchableOpacity>
        </View>

      <PreviousNextButton screen1='Lesson 2' screen2='Lesson 4'/>
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

  // sub title
  subTitle:{
    fontFamily: 'IBMPlexMono-Bold',
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

  // image styles
  image:{
    width: 320, 
    height: 200, 
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    borderRadius: 5,
    marginVertical: 13
  },

  // exercise
  exerciseContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 27,
    borderRadius: 5,
    marginHorizontal: 40,
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