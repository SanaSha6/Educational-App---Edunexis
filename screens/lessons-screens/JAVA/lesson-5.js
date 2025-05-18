import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Image
import SampleComms from '../../../assets/JAVA/lesson5-sample-comments.png'
import SingleLineComm from '../../../assets/JAVA/lesson5-oneline-comments.png'
import MultipleLineComm from '../../../assets/JAVA/lesson5-multiple-line-comments.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

// answer
const dataAnswer = [
    {id: 1, answer: 'To output text'},
    {id: 2, answer: 'To create text variables'},
    {id: 3, answer: 'To explain and document code'},
    {id: 4, answer: 'To print text and numbers with\na simple line of code'}
]

export default function Lesson3(){
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('');

  const HandleAnswer = () => {
  if (checked === 3) {
      Alert.alert('Correct!', 'You are correct!');
  } else if (checked === 1 || checked === 2 || checked === 4){
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
        {/* Java Comments */}
        <Text style={styles.subTitle}>Java Comments</Text>
        <Text style={styles.desc}>Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.</Text>
        <Text style={styles.subTitle}>Single-line Comments</Text>
        <Text style={styles.desc}>Single-line comments start with two forward slashes (//).</Text>
        <Text style={styles.desc}>Any text between // and the end of the line is ignored by Java (will not be executed).</Text>
        <Text style={styles.desc}>This example uses a single-line comment before a line of code:</Text>

        <Image style={styles.image} source={SampleComms}/>

        <Text style={styles.desc}>This example uses a single-line comment at the end of a line of code:</Text>

        <Image style={[styles.image, {height: 40}]} source={SingleLineComm}/>

        {/* Java Multi-line Comments */}
        <Text style={styles.subTitle}>Java Multi-line Comments</Text>
        <Text style={styles.desc}>Multi-line comments start with /* and ends with */.</Text>
        <Text style={styles.desc}>Any text between /* and */ will be ignored by Java.</Text>
        <Text style={styles.desc}>This example uses a multi-line comment (a comment block) to explain the code:</Text>

        <Image style={styles.image} source={MultipleLineComm}/>

        <Text style={styles.desc}>Single or multi-line comments?</Text>
        <Text style={styles.desc}>It's up to you which one you use. Normally, we use // for short comments, and /* */ for longer.</Text>

        {/* exercise */}
          <View style={styles.exerciseContainer}>
            <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
            <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>What is the meaning of comments{'\n'}in Java?</Text>
            
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

      <PreviousNextButton 
        screen1='Lesson 4' 
        isLesson5={true}
        tags='java' 
        quizScreen="Quiz Screen" 
      />

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
    height: 65,
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