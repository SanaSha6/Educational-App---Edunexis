import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// Image
import TryCode from '../../../assets/HTML/lesson2-trycode.png'
import TryCodeNotepad from '../../../assets/HTML/lesson2-trycode-notepad.png'
import SaveFile from '../../../assets/HTML/lesson2-save-file.png'
import Output from '../../../assets/HTML/lesson2-output.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

export default function Lesson2(){
  return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}
    style={styles.linearGradient}>

      <ScrollView style={{flex: 1}}>
        <Text style={[styles.desc, {paddingHorizontal: 35,}]}>A simple text editor is all you need to learn HTML.</Text>

          {/* Notepad or Text edit */}
          <Text style={styles.subTitle}>Learn HTML Using Notepad or TextEdit</Text>
          <Text style={styles.desc}>Web pages can be created and modified by using professional HTML editors.</Text>
          <Text style={styles.desc}>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</Text>
          <Text style={styles.desc}>We believe that using a simple text editor is a good way to learn HTML.</Text>
          <Text style={styles.desc}>Follow the steps below to create your first web page with Notepad or TextEdit.</Text>

          {/* Step 1 for PC */}
          <Text style={styles.subTitle}>Step 1: Open Notepad (PC)</Text>
          <Text style={[styles.desc, {fontWeight: 'bold'}]}>Windows 8 or later:</Text>
          <Text style={styles.desc}>Open the <Text style={{fontWeight: 'bold'}}>Start Screen</Text> (the window symbol at the bottom left on your screen). Type <Text style={{fontWeight: 'bold'}}>Notepad</Text>.</Text>
          <Text style={[styles.desc, {fontWeight: 'bold'}]}>Windows 7 or earlier:</Text>
          <Text style={styles.desc}>Open <Text style={{fontWeight: 'bold'}}>Start - Programs - Accessories - Notepad</Text></Text>

          {/* Step 1 for Mac */}
          <Text style={styles.subTitle}>Step 1: Open TextEdit (Mac)</Text>
          <Text style={styles.desc}>Open <Text style={{fontWeight: 'bold'}}>Finder - Applications - TextEdit</Text></Text>
          <Text style={styles.desc}>Also change some preferences to get the application to save files correctly. In <Text style={{fontWeight: 'bold'}}>Preferences - Format -</Text> choose <Text style={{fontWeight: 'bold'}}>"Plain Text"</Text></Text>
          <Text style={styles.desc}>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</Text>
          <Text style={[styles.desc, {fontWeight: 'bold'}]}>Then open a new document to place the code.</Text>

          {/* Step 2 */}
          <Text style={styles.subTitle}>Step 2: Write Some HTML</Text>
          <Text style={styles.desc}>Write or copy the following HTML code into Notepad:</Text>

          <Image style={[styles.tryCodeImage, {marginBottom: 5}]} source={TryCode}/>
          <Image style={styles.tryCodeImage} source={TryCodeNotepad}/>

          {/* Step 3 */}
          <Text style={styles.subTitle}>Step 3: Save the HTML Page</Text>
          <Text style={styles.desc}>Save the file on your computer. Select <Text style={{fontWeight: 'bold'}}>File - Save as</Text> in the Notepad menu.</Text>
          <Text style={styles.desc}>Name the file <Text style={{fontWeight: 'bold'}}>"index.htm"</Text> and set the encoding to <Text style={{fontWeight: 'bold'}}>UTF-8</Text> (which is the preferred encoding for HTML files).</Text>

          <Image style={styles.SaveFileImage} source={SaveFile}/>

          {/* Step 4 */}
          <Text style={styles.subTitle}>Step 4: View the HTML Page in Your Browser</Text>
          <Text style={styles.desc}>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</Text>
          <Text style={styles.desc}>The result will look much like this:</Text>

          <Image style={styles.tryCodeImage} source={Output}/>

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

  // try code
  tryCodeImage:{
    width: 320, 
    height: 200, 
    alignSelf: 'center', 
    marginTop: 10,
    resizeMode: 'stretch',
    borderRadius: 5
  },

  // Save file image
  SaveFileImage:{
    width: 320, 
    height: 100, 
    alignSelf: 'center', 
    resizeMode: 'stretch', 
    marginTop: 10,
    borderRadius: 5
  }
})