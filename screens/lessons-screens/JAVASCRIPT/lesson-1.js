import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import sampleHTMLContent from '../../../assets/JS/lesson1-HTML-content1.png'
import sampleHTMLContent1 from '../../../assets/JS/lesson1-HTML-content2.png'
import sampleHTMLStyle from '../../../assets/JS/lesson1-HTML-styles.png'
import sampleHTMLElement from '../../../assets/JS/lesson1-HTML-Elements.png'
import sampleHTMLElement1 from '../../../assets/JS/lesson1-HTML-styles2.png'

const dataAnswer = [
    {id: 1, answer: 'True'},
    {id: 2, answer: 'False'},
  ]

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson1(){
    const [checked, setChecked] = React.useState('');

    const HandleAnswer = () => {
    if (checked === 2) {
        Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1){
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
            <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 170}}>
                {/* wat is js */}
                <Text style={styles.subTitle}>What is JavaScript?</Text>
                <Text style={styles.desc}>JavaScript is the programming language of the web.</Text>
                <Text style={styles.desc}>It can update and change both HTML and CSS</Text>
                <Text style={styles.desc}>It can calculate, manipulate and validate data.</Text>

                {/* WHy study js */}
                <Text style={styles.subTitle}>Why Study JavaScript?</Text>
                <Text style={styles.desc}>JavaScript is one of the 3 languages all web developers must learn:</Text>
                    <Text style={styles.desc}>1. HTML to define the content of web pages</Text>
                    <Text style={styles.desc}>2. CSS to specify the layout of web pages</Text>
                    <Text style={styles.desc}>3. JavaScript to program the behavior of web pages</Text>

                {/* js can change html content */}
                <Text style={styles.subTitle}>JavaScript Can Change HTML Content</Text>
                <Text style={styles.desc}>One of many JavaScript HTML methods is getElementById().</Text>
                <Text style={styles.desc}>The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</Text>
                
                <Image style={styles.image} source={sampleHTMLContent}/>

                <Text style={styles.desc}>JavaScript accepts both double and single quotes:</Text>

                <Image style={styles.image} source={sampleHTMLContent1}/>

                {/* JavaScript change html styles (CSS) */}
                <Text style={styles.subTitle}>JavaScript Can Change HTML Styles (CSS) </Text>
                <Text style={styles.desc}>Changing the style of an HTML element, is a variant of changing an HTML attribute:</Text>

                <Image style={styles.image} source={sampleHTMLStyle}/>

                {/* js can hide html elements */}
                <Text style={styles.subTitle}>JavaScript Can Hide HTML Elements</Text>
                <Text style={styles.desc}>Hiding HTML elements can be done by changing the display style:</Text>
                
                <Image style={styles.image} source={sampleHTMLElement}/>

                {/* js can show html elements */}
                <Text style={styles.subTitle}>JavaScript Can Show HTML Elements</Text>
                <Text style={styles.desc}>Showing hidden HTML elements can also be done by changing the display style:</Text>
                
                <Image style={styles.image} source={sampleHTMLElement1}/>

                {/* fyi */}
                <Text style={styles.subTitle}>Did You Know?</Text>
                <Text style={styles.desc}>JavaScript and Java are completely different languages, both in concept and design.</Text>
                <Text style={styles.desc}>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.</Text>
                <Text style={styles.desc}>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.</Text>

                <View style={styles.exerciseContainer}>
                  <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
                  <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold'}}>JAVA is short for JavaScript.</Text>
                  
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


                <PreviousNextButton screen1='JS Screen' screen2='Lesson 2'/>

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

//   Image
  image:{
    width: '78%', 
    height: '2%',
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 10,
    borderRadius: 5
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