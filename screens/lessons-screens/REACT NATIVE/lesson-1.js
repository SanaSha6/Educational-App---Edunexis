import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const dataAnswer = [
  {id: 1, answer: 'To write CSS files for styling\nthe app'},
  {id: 2, answer: 'To create web-based versions of\nmobile apps'},
  {id: 3, answer: 'To simplify running and testing React\nNative apps without native build tools'},
  {id: 4, answer: 'To manage the app’s database and\nbackend features'}
]

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson1(){
  const [checked, setChecked] = React.useState('');

  const HandleAnswer = () => {
    if (checked === 3) {
      Alert.alert('Correct!', 'You are correct!');
    } else {
      Alert.alert('Wrong!', 'You are wrong, try again.');
    }
  };

  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={styles.whole}>
        {/* wat is react native */}
        <Text style={styles.subTitle}>What is React Native?</Text>
        <Text style={styles.desc}>React Native is a popular open-source framework developed by Meta (Facebook) that allows you to build cross-platform mobile apps using JavaScript and React. Instead of writing separate code for Android and iOS, React Native lets you use a single codebase that works for both. It does this by rendering real native components (not web views), which gives apps better performance and a native look and feel.</Text>

        {/* setting up */}
        <Text style={styles.subTitle}>Setting Up Your Environment (with Expo)</Text>
        <Text style={styles.desc}>The easiest way to get started is by using Expo, a toolchain that simplifies the setup process so you can build and preview apps quickly without installing Android Studio or Xcode right away.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Install <Text style={{color: 'red'}}>Node.js </Text> which is needed to run JavaScript and npm</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Install <Text style={{color: 'red'}}>Expo CLI</Text> using: npm install -g expo-cli</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Create a new app using: npx create-expo-app MyFirstApp</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Start the app with: cd MyFirstApp\n npx expo start</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}Scan the QR code using the Expo Go app on your phone to preview your app live</Text>

        {/* building app */}
        <Text style={styles.subTitle}>Building Your First App</Text>
        <Text style={styles.desc}>Once your app runs, you will see a simple screen rendered with React Native components. These components are the building blocks of your interface. For example:</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}import  Text, View  from 'react-native';</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}export default function App()</Text>
          <Text style={[styles.desc, {paddingHorizontal: 65,}]}>{'\u2022'}return</Text>
          <Text style={[styles.desc, {paddingHorizontal: 70,}]}>{'\u2022'}View</Text>
          <Text style={[styles.desc, {paddingHorizontal: 75,}]}>{'\u2022'}Text Hello, React Native! Text</Text>
          <Text style={[styles.desc, {paddingHorizontal: 70,}]}>{'\u2022'}View</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}<Text style={{color: 'red'}}>View </Text> is like a container or div in HTML.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}<Text style={{color: 'red'}}>Text</Text> is used to show text on the screen.</Text>
          <Text style={[styles.desc, {paddingHorizontal: 60,}]}>{'\u2022'}These elements are styled with JavaScript objects using <Text style={{color: 'red'}}>StyleSheet.create().</Text></Text>

        {/* Styling basic */}
        <Text style={styles.subTitle}>Styling Basics</Text>
        <Text style={styles.desc}>React Native uses its own way of styling — it's similar to CSS but written in JavaScript. You define styles in objects and apply them using a style prop.</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>What is the main purpose of using Expo in{'\n'}a React Native project?</Text>
          
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
                />
                <Text style={{ paddingTop: 7, color: 'white', fontFamily: 'SpaceMono-Regular', fontSize: 12 }}>{item.answer}</Text>          
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
        
        <PreviousNextButton screen1='HTML Screen' screen2='Lesson 2'/>
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