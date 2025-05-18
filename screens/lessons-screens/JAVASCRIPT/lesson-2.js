import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity, Platform } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import ScriptTag from '../../../assets/JS/lesson2-script-tag.png'
import JSHead from '../../../assets/JS/lesson2-js-head.png'
import JSBody from '../../../assets/JS/lesson2-js-body.png'
import JSExternal from '../../../assets/JS/lesson2-external-js.png'
import JSFile from '../../../assets/JS/lesson2-script-file.png'
import JSMultiple from '../../../assets/JS/lesson2-multiple-script.png'
import JSURL from '../../../assets/JS/lesson2-script-URL.png'
import JSPath from '../../../assets/JS/lesson2-script-file-path.png'
import JSNoPath from '../../../assets/JS/lesson2-script-no-path.png'


// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
    {id: 1, answer: '<script> and </script>'},
    {id: 2, answer: '<javascript> and </javascript>'},
    {id: 3, answer: '<head></head>'}
  ]

export default function Lesson2(){
    const [checked, setChecked] = React.useState('');

    const HandleAnswer = () => {
    if (checked === 1) {
        Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 2 || checked === 3){
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
          <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: Platform.OS === 'ios' ? 580 : 830}}>
            {/* The Script tag */}
            <Text style={styles.subTitle}>The script Tag</Text>
            <Text style={styles.desc}>In HTML, JavaScript code is inserted between script and /script tags.</Text>
            
            <Image style={styles.image} source={ScriptTag}/>

            <Text style={styles.desc}>Old JavaScript examples may use a type attribute: script type="text/javascript".</Text>
            <Text style={styles.desc}>The type attribute is not required. JavaScript is the default scripting language in HTML.</Text>
            
            {/* JS functions and events */}
            <Text style={styles.subTitle}>JavaScript Functions and Events</Text>
            <Text style={styles.desc}>A JavaScript function is a block of JavaScript code, that can be executed when "called" for.</Text>
            <Text style={styles.desc}>For example, a function can be called when an event occurs, like when the user clicks a button.</Text>

            {/* js head or body */}
            <Text style={styles.subTitle}>JavaScript in head or body</Text>
            <Text style={styles.desc}>You can place any number of scripts in an HTML document.</Text>
            <Text style={styles.desc}>Scripts can be placed in the body, or in the head section of an HTML page, or in both.</Text>
            
            {/* js in head */}
            <Text style={styles.subTitle}>JavaScript in head</Text>
            <Text style={styles.desc}>In this example, a JavaScript function is placed in the head section of an HTML page.</Text>
            <Text style={styles.desc}>The function is invoked (called) when a button is clicked:</Text>

            <Image style={[styles.image, {height: '11%'}]} source={JSHead}/>

            {/* js in body */}
            <Text style={styles.subTitle}>JavaScript in body</Text>
            <Text style={styles.desc}>In this example, a JavaScript function is placed in the body section of an HTML page.</Text>
            <Text style={styles.desc}>The function is invoked (called) when a button is clicked:</Text>

            <Image style={[styles.image, {height: '11%'}]} source={JSBody}/>

            <Text style={styles.desc}>Placing scripts at the bottom of the body element improves the display speed, because script interpretation slows down the display.</Text>

            {/* external js */}
            <Text style={styles.subTitle}>External JavaScript</Text>
            <Text style={styles.desc}>Scripts can also be placed in external files:</Text>
            <Text style={styles.desc}>External file: myScript.js</Text>

            <Image style={styles.image} source={JSExternal}/>

            <Text style={styles.desc}>External scripts are practical when the same code is used in many different web pages.</Text>
            <Text style={styles.desc}>JavaScript files have the file extension .js.</Text>
            <Text style={styles.desc}>To use an external script, put the name of the script file in the src (source) attribute of a script tag:</Text>

            <Image style={[styles.image, {height: '1.5%'}]} source={JSFile}/>

            <Text style={styles.desc}>You can place an external script reference in head or body as you like.</Text>
            <Text style={styles.desc}>The script will behave as if it was located exactly where the script tag is located.</Text>
            <Text style={styles.desc}>External scripts cannot contain script tags.</Text>

            {/* js external advantages */}
            <Text style={styles.subTitle}>External JavaScript Advantages</Text>
            <Text style={styles.desc}>Placing scripts in external files has some advantages:</Text>
            <Text style={styles.desc}>{'\u2022'} It separates HTML and code</Text>
            <Text style={styles.desc}>{'\u2022'} It makes HTML and JavaScript easier to read and maintain</Text>
            <Text style={styles.desc}>{'\u2022'} Cached JavaScript files can speed up page loads</Text>
            <Text style={styles.desc}>To add several script files to one page  - use several script tags:</Text>

            <Image style={[styles.image, {height: '2%'}]} source={JSMultiple}/>

            {/* external references */}
            <Text style={styles.subTitle}>External References</Text>
            <Text style={styles.desc}>An external script can be referenced in 3 different ways:</Text>
            <Text style={styles.desc}>{'\u2022'} With a full URL (a full web address)</Text>
            <Text style={styles.desc}>{'\u2022'} With a file path (like /js/)</Text>
            <Text style={styles.desc}>{'\u2022'} Without any path</Text>
            <Text style={styles.desc}>This example uses a full URL to link to myScript.js:</Text>

            <Image style={[styles.image, {height: '1.5%'}]} source={JSURL}/>

            <Text style={styles.desc}>This example uses a file path to link to myScript.js:</Text>

            <Image style={[styles.image, {height: '1.5%'}]} source={JSPath}/>

            <Text style={styles.desc}>This example uses no path to link to myScript.js:</Text>

            <Image style={[styles.image, {height: '1.5%'}]} source={JSNoPath}/>

            {/* exercise */}
            <View style={styles.exerciseContainer}>
              <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
              <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>In HTML, JavaScripts must be inserted{'\n'}inside which HTML tags?</Text>
              
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
                  <Text style={{ paddingTop: 7, color: 'white', fontFamily: 'SpaceMono-Regular', fontSize: 12, paddingRight: 5 }}>{item.answer}</Text>          
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
    width: 325, 
    height: 70,
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: '2.7%',
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