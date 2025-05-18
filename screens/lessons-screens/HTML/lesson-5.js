import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Button, RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

// images
import hrefAttribute from '../../../assets/HTML/lesson5-href.png'
import srcAttribute from '../../../assets/HTML/lesson5-src.png'
import dimensionsAttribute from '../../../assets/HTML/lesson5-dimensions.png'
import altAttribute from '../../../assets/HTML/lesson5-alt.png'
import styleAttribute from '../../../assets/HTML/lesson5-style.png'
import langAttribute from '../../../assets/HTML/lesson5-lang.png'
import langUSAttribute from '../../../assets/HTML/lesson5-lang-US.png'
import titleAttribute from '../../../assets/HTML/lesson5-title.png'
import goodQuote from '../../../assets/HTML/lesson5-quote-gooda.png'
import badQuote from '../../../assets/HTML/lesson5-quote-bada.png'
import singelDoubleQuote from '../../../assets/HTML/lesson5-single-double-quote.png'
import doubleSingleQuote from '../../../assets/HTML/lesson5-double-single-quote.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

// stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const dataAnswer = [
  {id: 1, answer: "<img src='img_girl.jpg'>"},
  {id: 2, answer: "<img src('img_girl.jpg')>"},
  {id: 3, answer: "<img src:'img_girl.jpg'>"}
]

const Lesson5Screen = () => {
  const navigation = useNavigation();
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

  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>
      
      <ScrollView style={{flex: 1}}>
        <Text style={styles.desc}>HTML attributes provide additional information about HTML elements.</Text>
        
        {/* HTML Attributes */}
        <Text style={styles.subTitle}>HTML Attributes</Text>
        <Text style={styles.desc}>{'\u2022'} All HTML elements can have attributes</Text>
        <Text style={styles.desc}>{'\u2022'} Attributes provide additional information about elements</Text>
        <Text style={styles.desc}>{'\u2022'} Attributes are always specified in the start tag</Text>
        <Text style={styles.desc}>{'\u2022'} Attributes usually come in name/value pairs like: name="value"
        </Text>

        {/* href Attribute */}
        <Text style={styles.subTitle}>The href Attribute</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>a</Text> tag defines a hyperlink. The <Text style={{color: 'red'}}>href</Text> attribute specifies the URL of the page the link goes to:</Text>

        <Image style={[styles.image, {height: 30, marginTop: 25}]} source={hrefAttribute}/>

        {/* src attribute */}
        <Text style={styles.subTitle}>The src Attribute</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>img</Text> tag is used to embed an image in an HTML page. The <Text style={{color: 'red'}}>src</Text> attribute specifies the path to the image to be displayed:</Text>

        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={srcAttribute}/>

        <Text style={styles.desc}>There are two ways to specify the URL in the <Text style={{color: 'red'}}>src</Text> attribute:</Text>
        <Text style={styles.desc}><Text style={{fontWeight: 'bold'}}>1. Absolute URL</Text> - Links to an external image that is hosted on another website. Example: src="https://www.Google.com/images/img_girl.jpg".</Text>
        <Text style={styles.desc}><Text style={{fontWeight: 'bold'}}>Notes:</Text> External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.</Text>
        <Text style={styles.desc}><Text style={{fontWeight: 'bold'}}>2. Relative URL</Text> - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".</Text>
        <Text style={styles.desc}><Text style={{fontWeight: 'bold'}}>Tip:</Text> It is almost always best to use relative URLs. They will not break if you change domain.</Text>

        {/* width and height attributes */}
        <Text style={styles.subTitle}>The width and height Attributes</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>img</Text> tag should also contain the <Text style={{color: 'red'}}>width</Text> and <Text style={{color: 'red'}}>height</Text> attributes, which specify the width and height of the image (in pixels):</Text>

        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={dimensionsAttribute}/>

        {/* alt attribute */}
        <Text style={styles.subTitle}>The alt Attribute</Text>
        <Text style={styles.desc}>The required <Text style={{color: 'red'}}>alt</Text> attribute for the <Text style={{color: 'red'}}>img</Text> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the <Text style={{color: 'red'}}>src</Text> attribute, or if the user uses a screen reader.</Text>

        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={altAttribute}/>

        {/* style attributee */}
        <Text style={styles.subTitle}>The style Attribute</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>style</Text> attribute is used to add styles to an element, such as color, font, size, and more.</Text>

        <Image style={[styles.image, {height: 30, marginTop: 13}]} source={styleAttribute}/>

        {/* lang attribute */}
        <Text style={styles.subTitle}>The lang Attribute</Text>
        <Text style={styles.desc}>You should always include the <Text style={{color: 'red'}}>lang</Text> attribute inside the <Text style={{color: 'red'}}>html</Text> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.</Text>
        <Text style={styles.desc}>The following example specifies English as the language:</Text>

        <Image style={[styles.image, {height: 150, marginTop: 25}]} source={langAttribute}/>

        <Text style={styles.desc}>Country codes can also be added to the language code in the <Text style={{color: 'red'}}>lang</Text> attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.</Text>
        <Text style={styles.desc}>The following example specifies English as the language and United States as the country:</Text>
        
        <Image style={[styles.image, {height: 170, marginTop: 25}]} source={langUSAttribute}/>

        {/* title attribute */}
        <Text style={styles.subTitle}>The title Attribute</Text>
        <Text style={styles.desc}>The <Text style={{color: 'red'}}>title</Text> attribute defines some extra information about an element.</Text>
        <Text style={styles.desc}>The value of the title attribute will be displayed as a tooltip when you mouse over the element:</Text>

        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={titleAttribute}/>

        {/* suggest to use lowercase */}
        <Text style={styles.subTitle}>We Suggest: Always Use Lowercase Attributes</Text>
        <Text style={styles.desc}>The HTML standard does not require lowercase attribute names.</Text>
        <Text style={styles.desc}>The title attribute (and all other attributes) can be written with uppercase or lowercase like <Text style={{fontWeight: 'bold'}}>title</Text> or <Text style={{fontWeight: 'bold'}}>TITLE</Text>.</Text>
        <Text style={styles.desc}>However, EduNexus <Text style={{fontWeight: 'bold'}}>recommends</Text> lowercase attributes in HTML, and <Text style={{fontWeight: 'bold'}}>demands</Text> lowercase attributes for stricter document types like XHTML.</Text>

        {/* suggest to use quote attribute values */}
        <Text style={styles.subTitle}>We Suggest: Always Quote Attribute Values</Text>
        <Text style={styles.desc}>The HTML standard does not require quotes around attribute values.</Text>
        <Text style={styles.desc}>However, EduNexus <Text style={{fontWeight: 'bold'}}>recommends</Text> quotes in HTML, and <Text style={{fontWeight: 'bold'}}>demands</Text> quotes for stricter document types like XHTML.</Text>

        <Text style={[styles.desc, {fontSize: 20}]}>Good</Text>
        <Image style={[styles.image, {height: 30}]} source={goodQuote}/>
        <Text style={[styles.desc, {fontSize: 20}]}>Bad</Text>
        <Image style={[styles.image, {height: 30}]} source={badQuote}/>

        {/* single or double quotes? */}
        <Text style={styles.subTitle}>Single or Double Quotes?</Text>
        <Text style={styles.desc}>Double quotes around attribute values are the most common in HTML, but single quotes can also be used.</Text>
        <Text style={styles.desc}>In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:</Text>

        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={singelDoubleQuote}/>
        <Text style={styles.desc}>Or vice versa:</Text>
        <Image style={[styles.image, {marginTop: 25, height: 30}]} source={doubleSingleQuote}/>

        {/* Chapter summary */}
        <Text style={styles.subTitle}>Chapter Summary</Text>

        <Text style={styles.desc}>{'\u2022'} All HTML elements can have <Text style={{fontWeight: 'bold'}}>attributes</Text></Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>href</Text> attribute of <Text style={{color: 'red'}}>a</Text> specifies the URL of the page the link goes to</Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>src</Text> attribute of <Text style={{color: 'red'}}>img</Text> specifies the path to the image to be displayed</Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>width</Text> and <Text style={{color: 'red'}}>height</Text> attributes of <Text style={{color: 'red'}}>img</Text> provide size information for images</Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>alt</Text> attribute of <Text style={{color: 'red'}}>img</Text> provides an alternate text for an image</Text>
        
        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>style</Text> attribute is used to add styles to an element, such as color, font, size, and more</Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>lang</Text> attribute of the <Text style={{color: 'red'}}>html</Text> tag declares the language of the Web page</Text>

        <Text style={styles.desc}>{'\u2022'} The <Text style={{color: 'red'}}>title</Text> attribute defines some extra information about an element</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, textAlign: 'center', fontFamily: 'IBMPlexMono-Bold'}}>Which of the following is a correct syntax for using an HTML attribute?</Text>
          
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

        <PreviousNextButton 
          screen1="Lesson 4"
          isLesson5={true}
          tags='html' 
          quizScreen="Quiz Screen" 
        />

      </ScrollView>
    </LinearGradient>
  )
}

export default function Lesson5(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Lesson 5" 
        component={Lesson5Screen} 
        options={{
          title: "HTML Attributes",
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,  
        }}
      />
    </Stack.Navigator>
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
    height: 60, 
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