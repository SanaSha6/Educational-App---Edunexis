import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity, Platform } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import JSinnerHTML from '../../../assets/JS/lesson3-innerHTML.png'
import JSinnerText from '../../../assets/JS/lesson3-innerText.png'
import JSDocWrite from '../../../assets/JS/lesson3-doc-write.png'
import JSDocwriteDel from '../../../assets/JS/lesson3-doc-write-delete.png'
import JSWindowsAlert from '../../../assets/JS/lesson3-windowsAlert.png'
import JSNoWindowsAlert from '../../../assets/JS/lesson3-no-windowsAlert.png'
import JSConsoleLog from '../../../assets/JS/lesson3-console-log.png'
import JSPrint from '../../../assets/JS/lesson3-print.png'


// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
    {id: 1, answer: 'window.alert()'},
    {id: 2, answer: 'console.log()'},
    {id: 3, answer: 'body.html()'},
    {id: 4, answer: 'document.write()'},
  ]

export default function Lesson3(){
    const [checked, setChecked] = React.useState('');

    const HandleAnswer = () => {
    if (checked === 3) {
        Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1 || checked === 2 || checked === 4){
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
        <ScrollView style={{flex: 1}}>
          {/* JavaScript Display Possibilities */}
          <Text style={styles.subTitle}>JavaScript Display Possibilities</Text>
          <Text style={styles.desc}>JavaScript can "display" data in different ways:</Text>
          <Text style={styles.desc}>{'\u2022'} Writing into an HTML element, using innerHTML or innerText.</Text>
          <Text style={styles.desc}>{'\u2022'} Writing into the HTML output using document.write().</Text>
          <Text style={styles.desc}>{'\u2022'} Writing into an alert box, using window.alert().</Text>
          <Text style={styles.desc}>{'\u2022'} Writing into the browser console, using console.log().</Text>

          {/* Using innerHTML */}
          <Text style={styles.subTitle}>Using innerHTML</Text>
          <Text style={styles.desc}>To access an HTML element, you can use the document.getElementById(id) method.</Text>
          <Text style={styles.desc}>Use the id attribute to identify the HTML element.</Text>
          <Text style={styles.desc}>Then use the innerHTML property to change the HTML content of the HTML element:</Text>

          <Image style={styles.image} source={JSinnerHTML}/>

          <Text style={styles.desc}>Changing the innerHTML property of an HTML element is the most common way to display data in HTML.</Text>

          {/* Using innerText */}
          <Text style={styles.subTitle}>Using innerText</Text>
          <Text style={styles.desc}>To access an HTML element, use the document.getElementById(id) method.</Text>
          <Text style={styles.desc}>Then use the innerText property to change the inner text of the HTML element:</Text>

          <Image style={styles.image} source={JSinnerText}/>

          <Text style={styles.desc}>Use innerHTML when you want to change an HTML element.</Text>
          <Text style={styles.desc}>Use innerText when you only want to change the plain text.</Text>

          {/* Using document.write() */}
          <Text style={styles.subTitle}>Using document.write()</Text>
          <Text style={styles.desc}>For testing purposes, it is convenient to use document.write():</Text>

          <Image style={styles.image} source={JSDocWrite}/>

          <Text style={styles.desc}>Using document.write() after an HTML document is loaded, will delete all existing HTML:</Text>

          <Image style={styles.image} source={JSDocwriteDel}/>

          <Text style={styles.desc}>The document.write() method should only be used for testing.</Text>

          {/* Using window.alert() */}
          <Text style={styles.subTitle}>Using window.alert()</Text>
          <Text style={styles.desc}>You can use an alert box to display data:</Text>

          <Image style={styles.image} source={JSWindowsAlert}/>

          <Text style={styles.desc}>You can skip the window keyword.</Text>
          <Text style={styles.desc}>In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:</Text>

          <Image style={styles.image} source={JSNoWindowsAlert}/>

          {/* Using console.log() */}
          <Text style={styles.subTitle}>Using console.log()</Text>
          <Text style={styles.desc}>For debugging purposes, you can call the console.log() method in the browser to display data.</Text>
          

          <Image style={styles.image} source={JSConsoleLog}/>

          {/* JavaScript Print */}
          <Text style={styles.subTitle}>JavaScript Print</Text>
          <Text style={styles.desc}>JavaScript does not have any print object or print methods.</Text>
          <Text style={styles.desc}>You cannot access output devices from JavaScript.</Text>
          <Text style={styles.desc}>The only exception is that you can call the window.print() method in the browser to print the content of the current window.</Text>


          <Image style={[styles.image, {height: 140}]} source={JSPrint}/>

          <View style={styles.exerciseContainer}>
            <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
            <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>What is NOT a correct syntax for writing output in JavaScript?</Text>
            
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

        <PreviousNextButton screen1='Lesson 2' screen2='Lesson 4'/>

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
    width: 320, 
    height: 200,
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 10,
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