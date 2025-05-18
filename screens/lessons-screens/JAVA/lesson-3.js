import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Image
import JavaSyntax from '../../../assets/JAVA/lesson3-java-syntax.png'
import MainMethod from '../../../assets/JAVA/lesson3-main-method.png'
import Sout from '../../../assets/JAVA/lesson3-sout.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

// answer
const dataAnswer = [
    {id: 1, answer: 'MyClass.jv'},
    {id: 2, answer: 'MyClass.java'},
    {id: 3, answer: 'MyClass.js'},
]

export default function Lesson3(){
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('');

  const HandleAnswer = () => {
  if (checked === 2) {
      Alert.alert('Correct!', 'You are correct!');
  } else if (checked === 1 || checked === 3){
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
        {/* Java Syntax */}
        <Text style={styles.subTitle}>Java Syntax</Text>
        <Text style={styles.desc}>In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:</Text>

        <Image style={styles.image} source={JavaSyntax}/>

        <Text style={[styles.desc, {fontSize: 18}]}>Example explained</Text>
        <Text style={styles.desc}>Every line of code that runs in Java must be inside a class. And the class name should always start with an uppercase first letter. In our example, we named the class Main.</Text>
        <Text style={styles.desc}><Text style={{fontFamily: 'SpaceMono-Bold' }}>Note: </Text>Java is case-sensitive: "MyClass" and "myclass" has different meaning.</Text>
        <Text style={styles.desc}>The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: </Text>

        {/* the main method */}
        <Text style={styles.subTitle}>The main Method</Text>
        <Text style={styles.desc}>The main() method is required and you will see it in every Java program:</Text>

        <Image style={[styles.image, {height: 30}]} source={MainMethod}/>

        <Text style={styles.desc}>Any code inside the main() method will be executed. Don't worry about the keywords before and after it. You will get to know them bit by bit while reading this tutorial.</Text>
        <Text style={styles.desc}>For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.</Text>

        {/* sout */}
        <Text style={styles.subTitle}>System.out.println()</Text>
        <Text style={styles.desc}>Inside the main() method, we can use the println() method to print a line of text to the screen:</Text>

        <Image style={[styles.image, {height: 70}]} source={Sout}/>

        <Text style={styles.desc}><Text style={{fontFamily: 'SpaceMono-Bold'}}>Note: </Text>The curly braces {} marks the beginning and the end of a block of code.</Text>
        <Text style={styles.desc}>System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).</Text>
        <Text style={styles.desc}>Don't worry too much about how System, out and println() works. Just know that you need them together to print stuff to the screen.</Text>
        <Text style={styles.desc}>You should also note that each code statement must end with a semicolon (;).</Text>

        {/* exercise */}
          <View style={styles.exerciseContainer}>
            <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
            <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>A file containing a class called MyClass{'\n'}should be saved as:</Text>
            
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
    width:  320, 
    height: 120,
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