import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Image
import VerJava from '../../../assets/JAVA/lesson2-java-version.png'
import InstalledVer from '../../../assets/JAVA/lesson2-installed-version.png'
import QuickStart from '../../../assets/JAVA/lesson2-java-quickstart.png'
import SaveJava from '../../../assets/JAVA/lesson2-save-java.png'
import RunJava from '../../../assets/JAVA/lesson2-save-java.png'
import OutputJava from '../../../assets/JAVA/lesson2-output-java.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson2(){
  const navigation = useNavigation();
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
    style={styles.linearGradient}>
      <ScrollView style={{flex: 1}}>
        {/* Java install */}
        <Text style={styles.subTitle}>Java Install</Text>
        <Text style={styles.desc}>If you want to download and install Java, follow the instructions here.</Text>
        <Text style={styles.desc}>Some PCs might have Java already installed.</Text>
        <Text style={styles.desc}>To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):</Text>

        <Image style={styles.image} source={VerJava}/>

        <Text style={styles.desc}>If Java is installed, you will see something like this (depending on version):</Text>

        <Image style={[styles.image, {height: 80}]} source={InstalledVer}/>

        <Text style={styles.desc}>If you do not have Java installed on your computer, you can download it at oracle.com.</Text>
        <Text style={styles.desc}><Text style={[styles.desc, {fontFamily: 'SpaceMono-Bold'}]}>Note:</Text> In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.</Text>

        {/* Java quickstart */}
        <Text style={styles.subTitle}>Java Quickstart</Text>
        <Text style={styles.desc}>In Java, every application begins with a class name, and that class must match the filename.</Text>
        <Text style={styles.desc}>Let's create our first Java file, called Main.java, which can be done in any text editor (like Notepad).</Text>
        <Text style={styles.desc}>The file should contain a "Hello World" message, which is written with the following code:</Text>

      <Image style={[styles.image, {height: 120}]} source={QuickStart}/>

      <Text style={styles.desc}>Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code above.</Text>
      <Text style={styles.desc}>Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":</Text>

      <Image style={styles.image} source={SaveJava}/>

      <Text style={styles.desc}>This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:</Text>

      <Image style={styles.image} source={RunJava}/>

      <Text style={styles.desc}>The output should read:</Text>

      <Image style={styles.image} source={OutputJava}/>

      <Text style={styles.desc}>Congratulations! You have written and executed your first Java program.</Text>

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

  // Image
  image:{
    width:  320, 
    height: 30,
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 20,
    borderRadius: 5
  },
})