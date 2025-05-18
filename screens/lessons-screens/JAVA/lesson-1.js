import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson1(){
  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={{flex: 1}}>
        {/* What is Java */}
        <Text style={styles.subTitle}>What is Java?</Text>
        <Text style={styles.desc}>Java is a popular programming language, created in 1995.</Text>
        <Text style={styles.desc}>It is owned by Oracle, and more than 3 billion devices run Java.</Text>
        <Text style={styles.desc}>It is used for:</Text>
        <View style={{paddingLeft: 15}}>
          <Text style={styles.desc}>{'\u2022'} Mobile applications (specially Android apps)</Text>
          <Text style={styles.desc}>{'\u2022'} Desktop applications</Text>
          <Text style={styles.desc}>{'\u2022'} Web applications</Text>
          <Text style={styles.desc}>{'\u2022'} Web servers and applications servers</Text>
          <Text style={styles.desc}>{'\u2022'} Games</Text>
          <Text style={styles.desc}>{'\u2022'} Database connection</Text>
          <Text style={styles.desc}>{'\u2022'} And much, much more!</Text>
        </View>

        {/* Why use java */}
        <Text style={styles.subTitle}>Why Use Java?</Text>
        <View style={{paddingLeft: 15}}>
          <Text style={styles.desc}>{'\u2022'} Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</Text>
          <Text style={styles.desc}>{'\u2022'} It is one of the most popular programming languages in the world</Text>
          <Text style={styles.desc}>{'\u2022'} It has a large demand in the current job market</Text>
          <Text style={styles.desc}>{'\u2022'} It is easy to learn and simple to use</Text>
          <Text style={styles.desc}>{'\u2022'} It is open-source and free</Text>
          <Text style={styles.desc}>{'\u2022'} It has huge community support (tens of millions of developers)</Text>
          <Text style={styles.desc}>{'\u2022'} Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</Text>
          <Text style={styles.desc}>{'\u2022'} <Text style={styles.desc}>{'\u2022'} Web applications</Text></Text>
        </View>

        <PreviousNextButton screen1='Java Screen' screen2='Lesson 2'/>

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
})