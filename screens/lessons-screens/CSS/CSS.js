import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from 'react-native-vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// Header Screens
import Profile from '../../main-screens/profile'
import Notifications from '../../main-screens/notifications';

// HTML lesson screens
import CSSLesson1 from './lesson-1';
import CSSLesson2 from './lesson-2';
import CSSLesson3 from './lesson-3';
import QuizScreen from '../../../components/Quiz'

// Subjects
const subjData = [
  {id: 1, title: 'CSS Introduction', desc: 'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.It can control the layout of multiple web pages all at once.', progress: 0.3, lesson: 'Lesson 1'},
  {id: 2, title: 'CSS Syntax', desc: 'CSS syntax is the set of rules used to define the style of HTML elements using selectors, properties, and values. Each rule consists of a selector followed by a declaration block with one or more property-value pairs inside curly brace.', progress: 0.7, lesson: 'Lesson 2'},
  {id: 3, title: 'CSS Selectors', desc: 'JavaScript is a high-level programming language used to create dynamic and interactive functionality on web pages.', progress: 0.4, lesson: 'Lesson 3'},
]

// Lesson screens
const lessonScreens = [
  {
    name: 'Lesson 1',
    component: CSSLesson1,
    title: 'CSS Introduction',
  },
  {
    name: 'Lesson 2',
    component: CSSLesson2,
    title: 'CSS Syntax',
  },
  {
    name: 'Lesson 3',
    component: CSSLesson3,
    title: 'CSS Selectors'
  },
];

const Stack = createNativeStackNavigator();

const CSSScreen = () => {
  const navigation = useNavigation();
  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>
      <View style={{marginTop: -20}}>
        <StatusBar style="light"/>
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={subjData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.subjDataContainer}
            activeOpacity={0.5}
            onPress={() => navigation.navigate(item.lesson)}
            >
              <Text style={styles.subjTitle}>{item.title}</Text>
              <Text style={styles.subjDesc}>{item.desc}</Text>
              <ProgressBar style={styles.progressBar} progress={item.progress} color={MD3Colors.neutral50}/>
              <Text style={styles.textProgress}>{`${Math.round(item.progress * 100)}%`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </LinearGradient>
  )
}

// back button from any lessons screen to HTML main screen
const CustomBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CSS Screen')}
      style={{ marginLeft: 10 }}
    >
      <Ionicons name="arrow-back" size={28} color="white" style={{paddingRight: 20, marginTop: 3}} />
    </TouchableOpacity>
  );
};

export default function CSS(){
  return(
    <Stack.Navigator>
      {/* Main screen */}
      <Stack.Screen 
        name='CSS Screen' 
        component={CSSScreen}
        options={({ navigation }) => ({ 
          headerShown: true,         
          headerStyle: {          
            backgroundColor: '#0F2027',  
          },
          headerTintColor: 'white',
          headerTitle: props => (
            <Text style={{ 
              color: 'white', 
              fontSize: 30, 
              fontFamily: 'IBMPlexMono-Bold',
              marginLeft: Platform.OS === 'ios' ? 0 : '10%',
              marginTop: Platform.OS === 'ios' ? 0 : 5,
            }}>
              CSS
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
              onPress={() => navigation.navigate('Subj')}
              >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>      
          )
        })}
      />

      {/* header screen */}
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: true }} />
      <Stack.Screen name='Notifcations' component={Notifications} options={{ headerShown: true }} />

      {/* HTML Lesson Screens */}
      {lessonScreens.map(({ name, component, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={({ navigation }) => ({
            headerShown: true,
            title,
            headerStyle: { backgroundColor: '#0F2027' },
            headerTintColor: 'white',
            headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold', fontSize: 25 },
            headerLeft: () => (
              <CustomBackButton navigation={navigation} />
            ),
          })}
        />
      ))}
      
      <Stack.Screen
        name='Quiz Screen'
        component={QuizScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'CSS Quiz',
          headerStyle: { backgroundColor: '#0F2027' },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold' },
        })}
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

  // flatlist/ list of subj
  subjDataContainer:{
    flex: 1,
    marginTop: 20,
    paddingBottom: 27,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: -7,
    backgroundColor: '#00000080',   
  },
  subjTitle:{
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: 'white'
  },
  subjDesc:{
    fontFamily: 'SpaceMono-Regular',
    marginHorizontal: 15,
    textAlign: 'justify',
    color: 'white'
  },
  // Progress
  progressBar:{
    marginHorizontal: 15,
    marginVertical: '3%'
  },
  textProgress: {
    fontFamily: 'SpaceMono-Bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center', 
    marginBottom: -10
  },
})