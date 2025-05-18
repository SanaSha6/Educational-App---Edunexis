import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import JSStatements from '../../../assets/JS/lesson4-statements.png'
import JSStatementsAgain from '../../../assets/JS/lesson4-statements-again.png'
import JSSemicolons1 from '../../../assets/JS/lesson4-semicolons1.png'
import JSSemicolons2 from '../../../assets/JS/lesson4-semicolons2.png'
import JSWhiteSpace from '../../../assets/JS/lesson4-white-space.png'
import JSSpaceOper from '../../../assets/JS/lesson4-space-operators.png'
import JSLengthBreak from '../../../assets/JS/lesson4-length-break.png'
import JSCodeBlock from '../../../assets/JS/lesson4-code-block.png'
import JSKeywords from '../../../assets/JS/lesson4-keywords.png'


// components
import PreviousNextButton from '../../../components/previous-next-button';

const dataAnswer = [
    {id: 1, answer: '1'},
    {id: 2, answer: '2'},
    {id: 3, answer: '3'},
    {id: 4, answer: '4'},
  ]

export default function Lesson4(){
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
        {/* statments */}
        <Text style={styles.subTitle}>Statements</Text>

        <Image style={styles.image} source={JSStatements}/>

        {/* JavaScript Programs */}
        <Text style={styles.subTitle}>JavaScript Programs</Text>
        <Text style={styles.desc}>A computer program is a list of "instructions" to be "executed" by a computer.</Text>
        <Text style={styles.desc}>In a programming language, these programming instructions are called statements.</Text>
        <Text style={styles.desc}>A JavaScript program is a list of programming statements.</Text>
        <Text style={styles.desc}>In HTML, JavaScript programs are executed by the web browser.</Text>

        {/* JavaScript Statements */}
        <Text style={styles.subTitle}>JavaScript Statements</Text>
        <Text style={styles.desc}>JavaScript statements are composed of:</Text>
        <Text style={styles.desc}>Values, Operators, Expressions, Keywords, and Comments.</Text>
        <Text style={styles.desc}>This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":</Text>

        <Image style={[styles.image, {height: 30}]} source={JSStatementsAgain}/>

        <Text style={styles.desc}>Most JavaScript programs contain many JavaScript statements.</Text>
        <Text style={styles.desc}>The statements are executed, one by one, in the same order as they are written.</Text>
        <Text style={styles.desc}>JavaScript programs (and JavaScript statements) are often called JavaScript code.</Text>

        {/* Semicolons ; */}
        <Text style={styles.subTitle}>Semicolons ;</Text>
        <Text style={styles.desc}>Semicolons separate JavaScript statements.</Text>
        <Text style={styles.desc}>Add a semicolon at the end of each executable statement:</Text>

        <Image style={styles.image} source={JSSemicolons1}/>

        <Text style={styles.desc}>When separated by semicolons, multiple statements on one line are allowed:</Text>

        <Image style={[styles.image, {height: 30}]} source={JSSemicolons2}/>

        <Text style={styles.desc}>On the web, you might see examples without semicolons.</Text>
        <Text style={styles.desc}>Ending statements with semicolon is not required, but highly recommended.</Text>

        {/* JavaScript White Space */}
        <Text style={styles.subTitle}>JavaScript White Space</Text>
        <Text style={styles.desc}>JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.</Text>
        <Text style={styles.desc}>The following lines are equivalent:</Text>

        <Image style={[styles.image, {height: 60}]} source={JSWhiteSpace}/>

        <Text style={styles.desc}>A good practice is to put spaces around operators ( = + - * / ):</Text>

        <Image style={[styles.image, {height: 30}]} source={JSSpaceOper}/>

        {/* JavaScript Line Length and Line Breaks */}
        <Text style={styles.subTitle}>JavaScript Line Length and Line Breaks</Text>
        <Text style={styles.desc}>For best readability, programmers often like to avoid code lines longer than 80 characters.</Text>
        <Text style={styles.desc}>If a JavaScript statement does not fit on one line, the best place to break it is after an operator:</Text>

        <Image style={[styles.image, {height: 45}]} source={JSLengthBreak}/>

        {/* JavaScript Code Blocks */}
        <Text style={styles.subTitle}>JavaScript Code Blocks</Text>
        <Text style={styles.desc}>JavaScript statements can be grouped together in code blocks, inside curly brackets {'{...}'}.</Text>
        <Text style={styles.desc}>The purpose of code blocks is to define statements to be executed together.</Text>
        <Text style={styles.desc}>One place you will find statements grouped together in blocks, is in JavaScript functions:</Text>

        <Image style={styles.image} source={JSCodeBlock}/>

        {/* JavaScript Keywords */}
        <Text style={styles.subTitle}>JavaScript Keywords</Text>
        <Text style={styles.desc}>JavaScript statements often start with a keyword to identify the JavaScript action to be performed.</Text>
        <Text style={styles.desc}>Our Reserved Words Reference lists all JavaScript keywords.</Text>
        <Text style={styles.desc}>Here is a list of some of the keywords you will learn about in this tutorial:</Text>

        <Image style={[styles.image, {height: 210}]} source={JSKeywords}/>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>How many statements can you find in {'\n'} this line of code:</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold'}}>let a = 5; let b = 6; c = a + b;</Text>
          
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





        <PreviousNextButton screen1='Lesson 3' screen2='Lesson 5'/>

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
    height: 85,
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