import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Button, RadioButton } from 'react-native-paper'

// images
import TagsFormat from '../../../assets/HTML/lesson4-tags-format.png'
import TagsExample from '../../../assets/HTML/lesson4-tags-example.png'
import TagsTable from '../../../assets/HTML/lesson4-tags-table.png'
import TagsNested from '../../../assets/HTML/lesson4-tags-nested.png'

import ExampleExplained1 from '../../../assets/HTML/lesson4-example-explained-1.png'
import ExampleExplained2 from '../../../assets/HTML/lesson4-example-explained-2.png'
import ExampleExplained3 from '../../../assets/HTML/lesson4-example-explained-3.png'
import ExampleExplained4 from '../../../assets/HTML/lesson4-example-explained-4.png'

import EndTagsMust from '../../../assets/HTML/lesson4-end-tags-must.png'
import EmptyTags from '../../../assets/HTML/lesson4-empty-tags.png'


// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
  {id: 1, answer: 'True'},
  {id: 2, answer: 'False'},
]

export default function lesson3(){
const [checked, setChecked] = React.useState('');

const HandleAnswer = () => {
  if (checked === 2) {
    Alert.alert('Correct!', 'You are correct!');
  } else if (checked === 1) {
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
        <Text style={styles.desc}>An HTML element is defined by a start tag, some content, and an end tag.</Text>

        {/* HTML elements */}
        <Text style={styles.subTitle}>HTML Elements</Text>
        <Text style={styles.desc}>The HTML <Text style={{fontWeight: 'bold'}}>element</Text> is everything from the start tag to the end tag:</Text>

        <Image style={styles.image} source={TagsFormat}/>

        <Text style={styles.desc}>Examples of some HTML elements:</Text>

        <Image style={[styles.image, {height: 100}]} source={TagsExample}/>
        <Image style={[styles.image, {height: 100}]} source={TagsTable}/>

        <Text style={styles.desc}>Note: Some HTML elements have no content (like the br element). These elements are called empty elements. Empty elements do not have an end tag!</Text>

        {/* Nested HTML elements */}
        <Text style={styles.subTitle}>Nested HTML Elements</Text>
        <Text style={styles.desc}>HTML elements can be nested (this means that elements can contain other elements).</Text>
        <Text style={styles.desc}>All HTML documents consist of nested HTML elements.</Text>
        <Text style={styles.desc}>The following example contains four HTML elements (<Text style={{color: 'red'}}>html</Text>, <Text style={{color: 'red'}}>body</Text>, <Text style={{color: 'red'}}>h1</Text> and <Text style={{color: 'red'}}>p</Text>):</Text>

        <Text style={[styles.desc, {fontSize: 20}]}>Example:</Text>
        <Image style={[styles.image, {height: 180}]} source={TagsNested}/>

        <Text style={[styles.desc, {fontSize: 20}]}>Example Explained</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>html</Text> element is the root element and it defines the whole HTML  document.</Text>
        <Text style={styles.desc}>It has a start tag <Text style={{color: 'red'}}>html</Text> and an end tag <Text style={{color: 'red'}}>/html</Text>.</Text>
        <Text style={styles.desc}>Then, inside the <Text style={{color: 'red'}}>html</Text> element there is a <Text style={{color: 'red'}}>body</Text> element:</Text>

        <Image style={[styles.image, {marginTop: 25, height: 130}]} source={ExampleExplained1}/>

        <Text style={styles.desc}>The <Text style={{color: 'red'}}>body</Text> element defines the document's body.</Text>
        <Text style={styles.desc}>It has a start tag  <Text style={{color: 'red'}}>body</Text> and an end tag  <Text style={{color: 'red'}}>/body</Text>.</Text>
        <Text style={styles.desc}>Then, inside the  <Text style={{color: 'red'}}>body</Text> element there are two other elements: <Text style={{color: 'red'}}>h1</Text>and <Text style={{color: 'red'}}>p</Text>:</Text>

        <Image style={[styles.image, {height: 50, marginTop: 25}]} source={ExampleExplained2}/>

        <Text style={styles.desc}>The <Text style={{color: 'red'}}>h1</Text> element defines a heading.</Text>
        <Text style={styles.desc}>It has a start tag <Text style={{color: 'red'}}>h1</Text> and an end tag <Text style={{color: 'red'}}>/h1</Text>:</Text>

        <Image style={[styles.image, {height: 30, marginTop: 25}]} source={ExampleExplained3}/>

        <Text style={styles.desc}>The <Text style={{color: 'red'}}>p</Text> element defines a paragraph.</Text>
        <Text style={styles.desc}>It has a start tag <Text style={{color: 'red'}}>p</Text> and an end tag <Text style={{color: 'red'}}>/p</Text>:</Text>
        
        <Image style={[styles.image, {height: 30, marginTop: 25}]} source={ExampleExplained4}/>

        <Text style={styles.subTitle}>Never Skip the End Tag</Text>
        <Text style={styles.desc}>Some HTML elements will display correctly, even if you forget the end tag:</Text>

        <Image style={[styles.image, {height: 170, marginTop: 12}]} source={EndTagsMust}/>

        <Text style={styles.desc}>However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</Text>

        <Text style={styles.subTitle}>Empty HTML Elements</Text>
        <Text style={styles.desc}>HTML elements with no content are called empty elements.</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>br</Text> tag defines a line break, and is an empty element without a closing tag:</Text>

        <Image style={[styles.image, {height: 30, marginTop: 25}]} source={EmptyTags}/>

        <Text style={styles.subTitle}>HTML is Not Case Sensitive</Text>
        <Text style={styles.desc}>HTML tags are not case sensitive: <Text style={{color: 'red'}}>P</Text> means the same as <Text style={{color: 'red'}}>p</Text>.</Text>
        <Text style={styles.desc}>The HTML standard does not require lowercase tags, but it's <Text style={{fontWeight: 'bold'}}>recommends</Text> to use lowercase in HTML, and <Text style={{fontWeight: 'bold'}}>demands</Text> lowercase for stricter document types like XHTML.</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, textAlign: 'center', fontFamily: 'IBMPlexMono-Bold'}}>True or False. Empty elements {'\n'} must have a close tag.</Text>
          
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
                <Text style={{ paddingTop: 7, color: 'white', fontFamily: 'SpaceMono-Regular' }}>{item.answer}</Text>          
              </View>
            )}
            scrollEnabled={false}
          />

          <Button 
            mode="contained" 
            onPress={HandleAnswer} 
            style={styles.submitButton}
            labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular'}}
            >
            
              Submit
          </Button>
        </View>

        <PreviousNextButton screen1='Lesson 3' screen2='Lesson 5'/>
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
    height: 30, 
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