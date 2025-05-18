import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, Platform } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// Header Screens
import Profile from '../main-screens/profile'
import Notifications from '../main-screens/notifications';

// Subj
import SubjectsScreen from '../main-screens/subjects'

// Subjects Screens
import HTML from '../lessons-screens/HTML/HTML'
import CSS from '../lessons-screens/CSS/CSS'
import JS from '../lessons-screens/JAVASCRIPT/JS'

// components
import Header from '../../components/header'

// popular subjects data
const popSubjData = [
  {
    id: 1, 
    title: 'HTML', 
    image: require('../../assets/app-js/html-sample-code.jpg'), 
    desc: 'HTML which stands for Hypertext Markup Language, uses a system of tags to tell web browsers how to display content. These tags act like labels, indicating what each piece of content.', 
    buttonNav: 'HTML Screen'},
  {id: 2, 
    title: 'CSS', 
    image: require('../../assets/app-js/css-sample-code.png'), 
    desc: 'CSS (Cascading Style Sheets) is a language used to style HTML or XML documents, controlling layout, colors, fonts, and spacing for better design and easier maintenance.',
  buttonNav: 'CSS Screen'},
  {id: 3, 
    title: 'JAVASCRIPT', 
    image: require('../../assets/app-js/js-sample-code.png'), 
    desc: 'JavaScript is a programming language used to make web pages interactive, like handling clicks or updating content dynamically.',
    buttonNav: 'JS Screen'
  }
]

// for tablet
const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Stack = createNativeStackNavigator();

const Display = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  // Filter the data based on the search query
  const filteredData = popSubjData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']}style={{flex: 1}}>
      <StatusBar style='light' />
      <Header title='EduNexis' />

    <FlatList
      ListHeaderComponent={
        <>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            style={styles.searchBar}
            onChangeText={onChangeSearch}
            inputStyle={{ color: 'black' }}
            iconColor="black"
            placeholderTextColor="#555"
          />
          <Text style={styles.popular}>POPULAR</Text>
        </>
      }
      contentContainerStyle={{ paddingBottom: 110 }}
      data={filteredData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.poster}>
          <Text style={[styles.postertDetails, { marginBottom: 13 }]}>
            {item.title}
          </Text>
          <Image style={styles.postertPicture} source={item.image} />
          <Text
            style={[
              styles.postertDetails,
              item.id === 1 && styles.highlightedItem,
              { fontSize: 13, fontFamily: 'SpaceMono-Regular' },
            ]}
          >
            {item.desc}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.buttonNav)}
            style={styles.buttonLearnMore}
          >
            <Text
              style={{
                fontFamily: 'NeueMontreal-Bold',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No results found.</Text>
        </View>
      }
    />

        </LinearGradient>
      );
    };


export default function Home(){
  return(
    <Stack.Navigator>
      {/* Home screens */}
      <Stack.Screen name="Main" component={Display} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <Stack.Screen 
        name='Notifcations' 
        component={Notifications} 
        options={({ navigation }) => ({ 
          headerShown: false,
          headerTitle: '',      
          headerStyle: {          
            backgroundColor: 'black',  
          },
          headerTintColor: 'white',

        })}
      />  

      {/* Subj */}
      <Stack.Screen name="Subj" component={SubjectsScreen} options={{ headerShown: false }}/>

      {/* Subj screens */}
      <Stack.Screen name='HTML Screen' component={HTML} options={{ headerShown: false }}/>
      <Stack.Screen name='CSS Screen' component={CSS} options={{ headerShown: false}}/>
      <Stack.Screen name='JS Screen' component={JS} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  // whole screen
  whole:{
    backgroundColor: '#FFF1D4',
  },

  // Search
  searchBar:{
    marginHorizontal: '5%',
    backgroundColor: 'white',
    marginTop: '5%',
  },
  
  // Popular
  popular:{
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 29,
    marginHorizontal: '5.5%',
    marginTop: '5%',
    color: 'white'
  },
  
  // Poster
  poster: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    paddingBottom: '5%',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginBottom: -5,
    backgroundColor: '#00000080',
  },
  postertPicture: {
    height: 190,
    width: isTablet ? 350 : 330,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginHorizontal: '8%',
    marginTop: -7,

  },
  postertDetails: {
    fontFamily: 'NeueMontreal-Bold',
    fontSize: 26.5,
    color: 'white',
    marginTop: 13,
    marginBottom: 8,
    textAlign: 'justify',
    paddingHorizontal: '5%'
  },
  buttonLearnMore:{
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: '5.5%',
    padding: '4.3%',
    paddingVertical: '2.5%'
  },

  highlightedItem:{
    marginBottom: -5
  },

  // empty search
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SpaceMono-Bold',
  },

})