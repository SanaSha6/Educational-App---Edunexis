import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper'

// images
import SelectorsampleCodeImage from '../../../assets/CSS/SelectorsampleCodeImage.png'
import IDSelectorsampleCodeImage from '../../../assets/CSS/IDSelectorsampleCodeImage.png'
import CLASSSelectorsampleCodeImage from '../../../assets/CSS/CLASSSelectorsampleCodeImage.png'
import CLASS1SelectorsampleCodeImage from '../../../assets/CSS/CLASS1SelectorsampleCodeImage.png'
import CLASS11SelectorsampleCodeImage from '../../../assets/CSS/CLASS11SelectorsampleCodeImage.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
  {id: 1, answer: '*'},
  {id: 2, answer: '.'},
  {id: 3, answer: '#'},
  {id: 4, answer: '%'}
]

export default function lesson3(){
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
  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>
      
      <ScrollView style={{flex: 1}}>
        {/* html documents */}
        <Text style={styles.subTitle}>CSS Selector</Text>
        <Text style={[styles.desc, {marginBottom: -8}]}>CSS selectors are used to "find" (or select) the HTML elements you want to style.</Text>
        <Text style={styles.desc}>We can divide CSS selectors into five categories:</Text>
        <Text style={styles.desc}>{'\u2022'}Simple selectors (select elements based on name, id, class)</Text>
        <Text style={styles.desc}>{'\u2022'}Combinator selectors (select elements based on a specific relationship between them)</Text>
        <Text style={styles.desc}>{'\u2022'}Pseudo-class selectors (select elements based on a certain state)</Text>
        <Text style={styles.desc}>{'\u2022'}Pseudo-elements selectors (select and style a part of an element)</Text>
        <Text style={styles.desc}>{'\u2022'}Attribute selectors (select elements based on an attribute or attribute value).</Text>



        <Text style={[styles.desc, {fontSize: 18,fontWeight:'bold'}]}>Example</Text>
        <Text style={styles.desc}>Here, all p elements on the page will be center-aligned, with a red text color:</Text>
        <Image style={styles.image} source={SelectorsampleCodeImage}/>


        <Text style={[styles.subTitle, {fontSize: 18,fontWeight:'bold'}]}>The CSS ID Selector</Text>
        <Text style={styles.desc}>{'\u2022'}The id selector uses the id attribute of an HTML element to select a specific element.</Text>
        <Text style={styles.desc}>{'\u2022'}The id of an element is unique within a page, so the id selector is used to select one unique element!</Text>
        <Text style={styles.desc}>{'\u2022'}To select an element with a specific id, write a hash (#) character, followed by the id of the element.</Text>
        <Text style={[styles.desc, {fontSize: 18,fontWeight:'bold'}]}>Example</Text>
        <Image style={styles.image} source={IDSelectorsampleCodeImage}/>

        <Text style={[styles.subTitle, {fontSize: 18,fontWeight:'bold'}]}>The CSS CLASS Selector</Text>
    
        <Text style={styles.desc}>The class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.</Text>
        <Text style={[styles.desc, {fontSize: 18,fontWeight:'bold'}]}>Example 1</Text>
        <Text style={styles.desc}>In this example all HTML elements with class="center" will be red and center-aligned: </Text>
        <Image style={styles.image} source={CLASSSelectorsampleCodeImage}/>

        <Text style={[styles.desc, {fontSize: 18,fontWeight:'bold'}]}>Example 2</Text>
        <Text style={styles.desc}>You can also specify that only specific HTML elements should be affected by a class. In this example only p elements with class="center" will be red and center-aligned: </Text>
        <Image style={styles.image} source={CLASS1SelectorsampleCodeImage}/>

        <Text style={[styles.desc, {fontSize: 18,fontWeight:'bold'}]}>Example 3</Text>
        <Text style={styles.desc}>HTML elements can also refer to more than one class. In this example the p element will be styled according to class="center" and to class="large": </Text>
        <Image style={[styles.image, {height: 30}]} source={CLASS11SelectorsampleCodeImage}/>
        

     
        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, textAlign: 'center', paddingHorizontal:16, fontFamily: 'IBMPlexMono-Bold'}}>Which CSS selector is used to select an element with a specific id?</Text>
          
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

      <PreviousNextButton 
        screen1='Lesson 2'
        isLesson5={true}
        tags='css' 
        quizScreen="Quiz Screen" 
      />
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
    height: 100, 
    alignSelf: 'center', 
    resizeMode: 'stretch',
    marginVertical: 15,
    marginBottom: 2,
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