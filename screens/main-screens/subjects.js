import React, { useState, useRef} from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ProgressBar, MD3Colors, Searchbar  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

// components 
import Header from '../../components/header'

// Header Screens
import Profile from '../main-screens/profile'
import Notifications from '../main-screens/notifications';

// html screen
import HTMLScreen from '../lessons-screens/HTML/HTML'
import CSSScreen from '../lessons-screens/CSS/CSS'
import JSScreen from '../lessons-screens/JAVASCRIPT/JS'
import JAVAScreen from '../lessons-screens/JAVA/JAVA'
import REACTScreen from '../lessons-screens/REACT NATIVE/REACTNATIVE'

// Subjects
const subjData = [
  {id: 1, title: 'HTML', desc: 'HyperText Markup Language (HTML) is the standard markup language for creating the structure and content of web pages.', progress: 0.3, navigate: 'HTML',}, 
  {id: 2, title: 'CSS', desc: 'Cascading Style Sheets (CSS) is the standard style sheet language used for describing the presentation and design of web pages.', progress: 0.7, navigate: 'CSS'},
  {id: 3, title: 'JAVASCRIPT', desc: 'JavaScript is a high-level programming language used to create dynamic and interactive functionality on web pages.', progress: 0.4, navigate: 'JS'},
  {id: 4, title: 'JAVA', desc: 'Java is a widely-used, object-oriented programming language designed for building cross-platform applications, known for its portability and reliability across different operating systems.', progress: 0.1, navigate: 'JAVA'},
  {id: 5, title: 'REACT NATIVE', desc: 'React Native is a framework for building mobile apps using JavaScript and React, allowing developers to create native iOS and Android apps with a single codebase.', progress: 0, navigate: 'REACT'}
]

const Stack = createNativeStackNavigator();

const SubjectsScreen = () => {
  const navigation = useNavigation();

  // height of the screen
  const autoHeight = () => {
    if (filteredData.length === 1) {
      return{
        paddingBottom: 600
      }
    } else {
      return{
        paddingBottom: 200
      }
    }
  }

  // search
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const filteredData = subjData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(
     <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>

      <Header title='Subjects'/>
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
          />
            </>
          }
          
          // if else ka rito para padding (height) ng screen

          contentContainerStyle={autoHeight()}
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.subjDataContainer}
            activeOpacity={0.5}
            onPress={() => navigation.navigate(item.navigate)}
            >
              <Text style={styles.subjTitle}>{item.title}</Text>
              <Text style={styles.subjDesc}>{item.desc}</Text>
              <ProgressBar style={styles.progressBar} progress={item.progress} color={MD3Colors.neutral50}/>
              <Text style={styles.textProgress}>{`${Math.round(item.progress * 100)}%`}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No results found.</Text>
            </View>
          }
        />
    </LinearGradient>
  )
}

export default function Subjects(){
  return(
    <Stack.Navigator>
      {/* Home screens */}
      <Stack.Screen name="Subj" component={SubjectsScreen} options={{ headerShown: false }}/>

      {/* Subjects */}
      <Stack.Screen name='HTML' component={HTMLScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='CSS' component={CSSScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='JS' component={JSScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='JAVA' component={JAVAScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='REACT' component={REACTScreen} options={{ headerShown: false}}/>

      {/* Header right side */}
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <Stack.Screen 
        name='Notifcations' 
        component={Notifications} 
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  // scroll
  wrapper:{
    backgroundColor: '#FFF1D4',
  },

  // title
  title:{
    fontFamily: 'Rockwell',
    fontSize: 30,
    marginHorizontal: '5%',
    fontWeight: 'bold',
    color: 'white'
  },

  // Search
  searchBar:{
    marginHorizontal: '5%',
    backgroundColor: 'white',
    marginTop: 20,
  },

  // flatlist/ list of subj
  subjDataContainer:{
    flex: 1,
    marginTop: 20,
    paddingBottom: '5%',
    borderRadius: 20,
    marginHorizontal: '5%',
    marginBottom: -7,
    backgroundColor: '#00000080',   
  },
  subjTitle:{
    fontFamily: 'NeueMontreal-Bold',
    fontSize: 25,
    paddingHorizontal: '5%',
    paddingVertical: '3.4%',
    color: 'white'
  },
  subjDesc:{
    fontFamily: 'SpaceMono-Regular',
    marginHorizontal: '5%',
    textAlign: 'justify',
    color: 'white',
    fontSize: 13,
  },
  progressBar:{
    marginHorizontal: '5.1%',
    marginVertical: '3%',
  },

  // empty search
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 500
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SpaceMono-Bold',
  },

  // progress text
  textProgress: {
    fontFamily: 'SpaceMono-Bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center', 
    marginBottom: -5
  },
})