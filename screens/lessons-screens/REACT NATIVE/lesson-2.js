import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson2(){
  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={styles.whole}>
        {/* what is lesson 2 */}
        <Text style={styles.subTitle}>Components, Props, and Styling</Text>
        <Text style={styles.desc}>React Native apps are built by combining small, reusable pieces called components. Components are like building blocks for the UI of your app — you can create your own or use built-in ones like Text, Image, or Button. This lesson focuses on understanding how to structure your UI with components, how to pass information between them using props, and how to style them using StyleSheet and Flexbox.</Text>

        {/* components */}
        <Text style={styles.subTitle}>Understanding Components</Text>
        <Text style={styles.desc}>A component is just a function that returns a part of your UI. You can make components reusable by wrapping common UI patterns into their own functions.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}function Greeting()</Text>
          <Text style={[styles.desc, {paddingHorizontal: 65,}]}>{'\u2022'}return Text Hello there! Text</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Components help keep your code organized, clean, and modular.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}You can nest components inside other components to build complex layouts.</Text>

        {/* props */}
        <Text style={styles.subTitle}>Using Props (Properties)</Text>
        <Text style={styles.desc}>Props are how you pass data into a component. Think of them like "inputs" to a function. You can use props to customize how a component behaves or displays data.</Text>

        {/* Stylesheet */}
        <Text style={styles.subTitle}>Styling with StyleSheet</Text>
        <Text style={styles.desc}>React Native styles are defined using JavaScript objects, not CSS files. You use the StyleSheet.create() method to define styles and apply them using the style prop.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Styling works similarly to CSS, but with camelCase properties (e.g., backgroundColor instead of background-color).</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}You can combine multiple styles by passing an array</Text>

        {/* flexbox */}
        <Text style={styles.subTitle}>Layout with Flexbox</Text>
        <Text style={styles.desc}>Flexbox is used to control how elements are arranged inside a container. It works similarly to web Flexbox and is very powerful for responsive design.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}flexDirection: 'row' or 'column'</Text>
          <Text style={[styles.desc, {paddingHorizontal: 65,}]}>{'\u2022'}justifyContent: aligns items vertically (in column) or horizontally (in row)</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}alignItems: aligns items in the opposite direction</Text>

        <PreviousNextButton screen1='Lesson 1' screen2='Lesson 3'/>
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