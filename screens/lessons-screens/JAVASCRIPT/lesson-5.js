import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// images
import JSSyntax from '../../../assets/JS/lesson5-syntax.png'
import JSNumbers from '../../../assets/JS/lesson5-numbers.png'
import JSSTring from '../../../assets/JS/lesson5-strings.png'
import JSVariables from '../../../assets/JS/lesson5-variables.png'
import JSOperators from '../../../assets/JS/lesson5-operators.png'
import JSOperators2 from '../../../assets/JS/lesson5-operators2.png'
import JSExpressions from '../../../assets/JS/lesson5-expressions.png'
import JSExpressions2 from '../../../assets/JS/lesson5-expressions2.png'
import JSExpressions3 from '../../../assets/JS/lesson5-expressions3.png'
import JSLet from '../../../assets/JS/lesson5-keywords-let.png'
import JSVar from '../../../assets/JS/lesson5-keywords-var.png'
import JSComments from '../../../assets/JS/lesson5-comments.png'
import JSCaseSens from '../../../assets/JS/lesson5-case-sensitive.png'

// components
import PreviousNextButton from '../../../components/previous-next-button';

// stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const dataAnswer = [
    {id: 1, answer: 'x : 5'},
    {id: 2, answer: 'x = 5'},
    {id: 3, answer: 'x == 5'},
    {id: 4, answer: 'x -> 5'},
  ]

const Lesson5SCreen = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState('');

    const HandleAnswer = () => {
    if (checked === 2) {
        Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1 || checked === 3 || checked === 4){
        Alert.alert('Wrong!', 'You are wrong, try again.');
    } else {
        Alert.alert('Error!', 'Please select an answer.');
    }
};
    return (
      <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}>
        <ScrollView style={{flex: 1}}>
          {/* syntax */}
          <Text style={styles.desc}>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</Text>

          <Image style={styles.image} source={JSSyntax}/>

          {/* JavaScript Values */}
          <Text style={styles.subTitle}>JavaScript Values</Text>
          <Text style={styles.desc}>The JavaScript syntax defines two types of values:</Text>
          <Text style={styles.desc}>{'\u2022'} Fixed values</Text>
          <Text style={styles.desc}>{'\u2022'} Variable values</Text>
          <Text style={styles.desc}>Fixed values are called Literals.</Text>
          <Text style={styles.desc}>Variable values are called Variables.</Text>

          {/* JavaScript Literals */}
          <Text style={styles.subTitle}>JavaScript Literals</Text>
          <Text style={styles.desc}>The two most important syntax rules for fixed values are:</Text>
          <Text style={styles.desc}>1. Numbers are written with or without decimals:</Text>

          <Image style={[styles.image, {height: 50}]} source={JSNumbers}/>
          
          <Text style={styles.desc}>2. Strings are text, written within double or single quotes:</Text>

          <Image style={[styles.image, {height: 65}]} source={JSSTring}/>

          {/* JavaScript Variables */}
          <Text style={styles.subTitle}>JavaScript Variables</Text>
          <Text style={styles.desc}>In a programming language, variables are used to store data values.</Text>
          <Text style={styles.desc}>JavaScript uses the keywords var, let and const to declare variables.</Text>
          <Text style={styles.desc}>An equal sign is used to assign values to variables.</Text>
          <Text style={styles.desc}>In this example, x is defined as a variable. Then, x is assigned (given) the value 6:</Text>

          <Image style={[styles.image, {height: 50}]} source={JSVariables}/>
          
          {/* JavaScript Operators */}
          <Text style={styles.subTitle}>JavaScript Operators</Text>
          <Text style={styles.desc}>JavaScript uses arithmetic operators ( + - * / ) to compute values:</Text>

          <Image style={[styles.image, {height: 35}]} source={JSOperators}/>

          <Text style={styles.desc}>JavaScript uses an assignment operator ( = ) to assign values to variables:</Text>

          <Image style={[styles.image, {height: 55}]} source={JSOperators2}/>

          {/* JavaScript Expressions */}
          <Text style={styles.subTitle}>JavaScript Expressions</Text>
          <Text style={styles.desc}>An expression is a combination of values, variables, and operators, which computes to a value.</Text>
          <Text style={styles.desc}>The computation is called an evaluation.</Text>
          <Text style={styles.desc}>For example, 5 * 10 evaluates to 50:</Text>

          <Image style={[styles.image, {height: 35}]} source={JSExpressions}/>

          <Text style={styles.desc}>Expressions can also contain variable values:</Text>

          <Image style={[styles.image, {height: 30}]} source={JSExpressions2}/>

          <Text style={styles.desc}>The values can be of various types, such as numbers and strings.</Text>
          <Text style={styles.desc}>For example, "John" + " " + "Doe", evaluates to "John Doe":</Text>

          <Image style={[styles.image, {height: 30}]} source={JSExpressions3}/>

          {/* JavaScript Keywords */}
          <Text style={styles.subTitle}>JavaScript Keywords</Text>
          <Text style={styles.desc}>JavaScript keywords are used to identify actions to be performed.</Text>
          <Text style={styles.desc}>The let keyword tells the browser to create variables:</Text>

          <Image style={[styles.image, {height: 55}]} source={JSLet}/>

          <Text style={styles.desc}>The var keyword also tells the browser to create variables:</Text>

          <Image style={[styles.image, {height: 55}]} source={JSVar}/>

          <Text style={styles.desc}>In these examples, using var or let will produce the same result.</Text>

          {/* JavaScript Comments */}
          <Text style={styles.subTitle}>JavaScript Comments</Text>
          <Text style={styles.desc}>Not all JavaScript statements are "executed".</Text>
          <Text style={styles.desc}>Code after double slashes // or between /* and */ is treated as a comment.</Text>
          <Text style={styles.desc}>Comments are ignored, and will not be executed:</Text>

          <Image style={[styles.image, {height: 60}]} source={JSComments}/>

          {/* JavaScript Identifiers / Names */}
          <Text style={styles.subTitle}>JavaScript Identifiers / Names</Text>
          <Text style={styles.desc}>Identifiers are JavaScript names.</Text>
          <Text style={styles.desc}>Identifiers are used to name variables and keywords, and functions.</Text>
          <Text style={styles.desc}>The rules for legal names are the same in most programming languages.</Text>
          <Text style={styles.desc}>A JavaScript name must begin with:</Text>
          <Text style={styles.desc}>{'\u2022'} A letter (A-Z or a-z)</Text>
          <Text style={styles.desc}>{'\u2022'} A dollar sign ($)</Text>
          <Text style={styles.desc}>{'\u2022'} Or an underscore (_)</Text>
          <Text style={styles.desc}>Subsequent characters may be letters, digits, underscores, or dollar signs.</Text>

          {/* Note */}
          <Text style={styles.subTitle}>Note</Text>
          <Text style={styles.desc}>Numbers are not allowed as the first character in names.</Text>
          <Text style={styles.desc}>This way JavaScript can easily distinguish identifiers from numbers.</Text>

          {/* JavaScript is Case Sensitive */}
          <Text style={styles.subTitle}>JavaScript is Case Sensitive</Text>
          <Text style={styles.desc}>All JavaScript identifiers are case sensitive. </Text>
          <Text style={styles.desc}>The variables lastName and lastname, are two different variables:</Text>

          <Image style={[styles.image, {height: 65}]} source={JSCaseSens}/>

          <Text style={styles.desc}>JavaScript does not interpret LET or Let as the keyword let.</Text>

          {/* JavaScript and Camel Case */}
          <Text style={styles.subTitle}>JavaScript and Camel Case</Text>
          <Text style={styles.desc}>Historically, programmers have used different ways of joining multiple words into one variable name:</Text>
          <Text style={styles.desc}>Hyphens:</Text>
          <Text style={styles.desc}>first-name, last-name, master-card, inter-city.</Text>
          <Text style={styles.desc}>Hyphens are not allowed in JavaScript. They are reserved for subtractions.</Text>
          <Text style={styles.desc}>Underscore:</Text>
          <Text style={styles.desc}>first_name, last_name, master_card, inter_city.</Text>
          <Text style={styles.desc}>Upper Camel Case (Pascal Case):</Text>
          <Text style={styles.desc}>FirstName, LastName, MasterCard, InterCity.</Text>
          <Text style={styles.desc}>Lower Camel Case:</Text>
          <Text style={styles.desc}>JavaScript programmers tend to use camel case that starts with a lowercase letter:</Text>
          <Text style={styles.desc}>firstName, lastName, masterCard, interCity.</Text>

          {/* JavaScript Character Set */}
          <Text style={styles.subTitle}>JavaScript Character Set</Text>
          <Text style={styles.desc}>JavaScript uses the Unicode character set.</Text>
          <Text style={styles.desc}>Unicode covers (almost) all the characters, punctuations, and symbols in the world.</Text>

          {/* exercise */}
          <View style={styles.exerciseContainer}>
            <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
            <Text style={{color: 'white', marginBottom: 10, fontSize: 15, fontFamily: 'NeueMontreal-Bold', textAlign: 'center'}}>What is a correct syntax for assigning a value to a variable?</Text>
            
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
          screen1="Lesson 4" 
          isLesson5={true}
          tags='javascript' 
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
        component={Lesson5SCreen} 
        options={{
          title: "JS Syntax",
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
    height: 120,
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