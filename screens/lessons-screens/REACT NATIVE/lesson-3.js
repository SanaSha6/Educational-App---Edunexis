import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson3(){
  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={styles.whole}>
        {/* what is lesson 3 */}
        <Text style={styles.subTitle}>State and User Input</Text>
        <Text style={styles.desc}>React Native apps become useful when they can respond to users — like showing a message after a button click or updating the screen when the user types something. This is made possible through two important concepts: state and user input handling.</Text>

        {/* state */}
        <Text style={styles.subTitle}>What is State?</Text>
          <Text style={styles.desc}><Text style={{color: 'red'}}>State </Text>is like a component's memory — it holds values that can change over time, such as a counter, a name, or a toggle.</Text>
          <Text style={styles.desc}>You use a React feature called <Text style={{color: 'red'}}>useState </Text>to create and manage state</Text>
          <Text style={styles.desc}>When the state changes, the screen automatically re-renders to reflect the new value.</Text>

        {/* user input */}
        <Text style={styles.subTitle}>Handling User Input</Text>
        <Text style={styles.desc}>React Native provides special components to receive input from the user:</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}<Text style={{color: 'red'}}>TextInput - </Text>lets the user type something (like a name or email)</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}<Text style={{color: 'red'}}>Button - </Text>performs an action when tapped</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}<Text style={{color: 'red'}}>Switch </Text>or <Text style={{color: 'red'}}>TouchableOpacity - </Text>allows toggling or detecting touches</Text>
          <Text style={styles.desc}>These components work together with state: when the user types, the state updates.</Text>

          <View style={{paddingTop: 100}}></View>

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