import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Image
import Sout from '../../../assets/JAVA/lesson4-sout.png'
import SoutMultiple from '../../../assets/JAVA/lesson4-sout-multiple.png'
import DoubleQuotes from '../../../assets/JAVA/lesson4-double-quotes.png'
import PrintMethod from '../../../assets/JAVA/lesson4-print().png'

import PrintNum from '../../../assets/JAVA/lesson4-print-num.png'
import Calculation from '../../../assets/JAVA/lesson4-calculations.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

// answer
const dataAnswer = [
  {id: 1, answer: 'println()'},
  {id: 2, answer: 'printline()'},
  {id: 3, answer: 'printtext()'},
  {id: 4, answer: 'echo()'}
]

const dataAnswer2 = [
  {id: 1, answer: '3'},
  {id: 2, answer: '6'},
  {id: 3, answer: '9'}
]

export default function Lesson3(){
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('');
  const [checked2, setChecked2] = React.useState('');

  const HandleAnswer = () => {
  if (checked === 1) {
      Alert.alert('Correct!', 'You are correct!');
  } else if (checked === 2 || checked === 3 || checked === 4){
      Alert.alert('Wrong!', 'You are wrong, try again.');
  } else {
      Alert.alert('Error!', 'Please select an answer.');
  }
  }

  const HandleAnswer2 = () => {
    if(checked2 === 2) {
      Alert.alert('Correct!', 'You are correct!');
    } else if (checked2 === 1 || checked2 === 3) {
      Alert.alert('Wrong!', 'You are wrong, try again.');
    } else {
      Alert.alert('Error!', 'Please select an answer.');
    }
  }

  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={{flex: 1}}>
        {/* Java output/print */}
        <Text style={[styles.subTitle, {fontSize: 25, textAlign: 'center'}]}>Java Output / Print</Text>
        <Text style={styles.subTitle}>Print Text</Text>
        <Text style={styles.desc}>You learned from the previous chapter that you can use the println() method to output values or print text in Java:</Text>

        <Image style={[styles.image, {height: 40}]} source={Sout}/>

        <Text style={styles.desc}>You can add as many println() methods as you want. Note that it will add a new line for each method:</Text>

        <Image style={styles.image} source={SoutMultiple}/>

        {/* Double Quotes */}
        <Text style={styles.subTitle}>Double Quotes</Text>
        <Text style={styles.desc}>Text must be wrapped inside double quotations marks "".</Text>
        <Text style={styles.desc}>If you forget the double quotes, an error occurs:</Text>

        <Image style={styles.image} source={DoubleQuotes}/>

        {/* The Print() Method */}
        <Text style={styles.subTitle}>The Print() Method</Text>
        <Text style={styles.desc}>There is also a print() method, which is similar to println().</Text>
        <Text style={styles.desc}>The only difference is that it does not insert a new line at the end of the output:</Text>

        <Image style={[styles.image, {height: 70}]} source={PrintMethod}/>

        <Text style={styles.desc}>Note that we add an extra space (after "Hello World!" in the example above) for better readability.</Text>
        <Text style={styles.desc}>In this tutorial, we will only use println() as it makes the code output easier to read.</Text>

        {/* exercise java output print */}
        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>Which method is often used to print text{'\n'}in Java?</Text>
          
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
        
        {/* Java Output Numbers */}
        <Text style={[styles.subTitle, {fontSize: 25, textAlign: 'center'}]}>Java Output Numbers</Text>
        <Text style={styles.subTitle}>Print Numbers</Text>
        <Text style={styles.desc}>You can also use the println() method to print numbers.</Text>
        <Text style={styles.desc}>However, unlike text, we don't put numbers inside double quotes:</Text>

        <Image style={styles.image} source={PrintNum}/>

        <Text style={styles.desc}>You can also perform mathematical calculations inside the println() method:</Text>

        <Image style={[styles.image, {height: 35}]} source={Calculation}/>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>What is the output of the following code?</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>System.out.println(3 + 3);</Text>
          
          <FlatList
          data={dataAnswer2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              <View style={{flexDirection: 'row'}}>
              <RadioButton
                  value={item.id}
                  status={ checked === item.id ? 'checked' : 'unchecked' }
                  onPress={() => setChecked2(item.id)}
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
          onPress={HandleAnswer2} 
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
    width:  320, 
    height: 80,
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 20,
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