import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Button, RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

// components
import PreviousNextButton from '../../../components/previous-next-button';

// stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const dataAnswer = [
  {id: 1, answer: "ScrollView"},
  {id: 2, answer: "View"},
  {id: 3, answer: "Flatlist"}
]

export default function Lesson5(){
  const [checked, setChecked] = React.useState('');
  const navigation = useNavigation();

  const HandleAnswer = () => {
    if (checked === 3) {
      Alert.alert('Correct!', 'You are correct!');
    } else if (checked === 1 || checked === 2) {
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
        <Text style={styles.desc}>Fetching Data & Displaying Lists</Text>
        <Text style={styles.desc}>In real-world apps, you often need to show data from the internet — like products from a shop, posts from a blog, or weather updates. In React Native, you can fetch data from APIs and then display it in a list using special tools like <Text style={{color: 'red'}}>fetch(), useEffect(), and FlatList.</Text></Text>
        
        <Text style={styles.desc}>What is Fetching Data?</Text>
        <Text style={styles.desc}><Text style={{color: 'red'}}>Fetching data </Text> means connecting to an external source (like a website or API) to get information.</Text>
        <Text style={styles.desc}>You use JavaScript’s built-in <Text style={{color: 'red'}}>fetch() </Text> function to send a request and receive data in formats like JSON</Text>
        <Text style={styles.desc}>Because data doesn’t load instantly, you often work with asynchronous code using <Text style={{color: 'red'}}>async and await.</Text></Text>

        <Text style={styles.desc}>What is useEffect?</Text>
        <Text style={styles.desc}><Text style={{color: 'red'}}>useEffect() </Text> is a React hook that runs code automatically when the app loads (or when something changes).</Text>
        <Text style={styles.desc}>It's the perfect place to put your API calls so your data loads when the screen appears.</Text>
        <Text style={styles.desc}>Think of it as the “on start” or “on load” part of the app.</Text>

        <Text style={styles.desc}>Showing Data with Flatlist</Text>
        <Text style={styles.desc}><Text style={{color: 'red'}}>Flatlist </Text> is a special component that efficiently displays scrollable lists.</Text>
        <Text style={styles.desc}>It takes an array of data and renders each item using a small component or layout.</Text>
        <Text style={styles.desc}>FlatList is great for building things like contact lists, product catalogs, or article feeds.</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.subTitle, {alignSelf: 'center', paddingVertical: 10, marginTop: 10}]}>Exercise</Text>
          <Text style={{color: 'white', marginBottom: 10, fontSize: 15, textAlign: 'center', fontFamily: 'IBMPlexMono-Bold'}}>Which component is commonly used in React Native to efficiently display a scrollable list of items?</Text>
          
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
          tags='react native' 
          quizScreen="Quiz Screen" 
        />

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
    height: 60, 
    alignSelf: 'center', 
    resizeMode: 'contain', 
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