import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// Image
import SyntaxsampleCodeImage from '../../../assets/CSS/SyntaxsampleCodeImage.png'
import ExampleCodeImage from '../../../assets/CSS/ExampleCodeImage.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson2(){
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}
    style={styles.linearGradient}>

      <ScrollView style={{flex: 1}}>

          {/* Notepad or Text edit */}
          {/* Step 3 */}
          <Text style={styles.subTitle}>CSS Syntax</Text>
          <Text style={styles.desc}>The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</Text>

          <Image style={styles.SyntaxsampleCodeImage} source={SyntaxsampleCodeImage}/>

          {/* Step 4 */}
          <Text style={styles.subTitle}>Example</Text>
          <Text style={styles.desc}>In this example all p elements will be center-aligned, with a red text color:</Text>
          <Image style={styles.SyntaxsampleCodeImage} source={ExampleCodeImage}/>
          <Text style={styles.desc}>p is a selector in CSS (it points to the HTML element you want to style: p).</Text>
          <Text style={styles.desc}>Color is a property, and red is the property value.</Text>
          <Text style={styles.desc}>Text-align is a property, and center is the property value.
          </Text>

          <PreviousNextButton screen1='Lesson 1' screen2='Lesson 3'/>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1, 
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

  // try code
SyntaxsampleCodeImage:{
    width: 320, 
    height: 100, 
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 10,
    borderRadius: 5
  },


})