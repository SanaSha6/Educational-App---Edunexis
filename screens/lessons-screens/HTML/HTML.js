import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { ProgressBar, MD3Colors, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from 'react-native-vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// HTML lesson screens
import HTMLlesson1 from './lesson-1';
import HTMLlesson2 from './lesson-2';
import HTMLlesson3 from './lesson-3';
import HTMLlesson4 from './lesson-4';
import HTMLlesson5 from './lesson-5';
import QuizScreen from '../../../components/Quiz'

// Subjects
const subjData = [
  {id: 1, title: 'HTML Introduction', desc: 'Learn what HTML is, its role in web development, and how it forms the foundation of all web pages.', progress: 0.3, lesson: 'Lesson 1'},
  {id: 2, title: 'HTML Editors', desc: 'Explore different HTML editors and tools used to write, format, and preview HTML code effectively.', progress: 0.7, lesson: 'Lesson 2'},
  {id: 3, title: 'HTML Basics', desc: 'Understand the basic structure of HTML documents, including tags, elements, and how they work together.', progress: 0.4, lesson: 'Lesson 3'},
  {id: 4, title: 'HTML Elements', desc: 'Dive into essential HTML elements used to structure and display different types of content on a webpage.', progress: 0.1, lesson: 'Lesson 4'},
  {id: 5, title: 'HTML Attributes', desc: 'Learn how to use HTML attributes to add additional information to elements and customize their behavior.', progress: 0.5, lesson: 'Lesson 5'}
]

// Lesson screens
const lessonScreens = [
  {
    name: 'Lesson 1',
    component: HTMLlesson1,
    title: 'HTML Introduction',
  },
  {
    name: 'Lesson 2',
    component: HTMLlesson2,
    title: 'HTML Editors',
  },
  {
    name: 'Lesson 3',
    component: HTMLlesson3,
    title: 'HTML Basics'
  },
  {
    name: 'Lesson 4',
    component: HTMLlesson4,
    title: 'HTML Elements'
  },
  {
    name: 'Lesson 5',
    component: HTMLlesson5,
    title: 'HTML Attributes'
  },
 
];

const Stack = createNativeStackNavigator();

const HTMLScreen = () => {
  const navigation = useNavigation();
  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>
      <View style={{marginTop: -5}}>
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
      onPress={() => navigation.navigate('HTML Screen')}
      style={{marginTop: Platform.OS === 'ios' ? -7 : 0}}
    >
      <Ionicons name="arrow-back" size={28} color="white" style={{paddingRight: 20, marginTop: 3}} />
    </TouchableOpacity>
  );
};

export default function HTML(){
  return(
    <Stack.Navigator>
      {/* Main screen */}
      <Stack.Screen 
        name='HTML Screen' 
        component={HTMLScreen}
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
              marginTop: Platform.OS === 'ios' ? 0 : '5%'
            }}>
              HTML
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={{marginTop: Platform.OS === 'ios' ? 0 : 20}}
              onPress={() => navigation.navigate('Subj')}
              >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>      
          )
        })}
      />

      {/* HTML Lesson Screens */}
      {lessonScreens.map(({ name, component, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: { backgroundColor: '#0F2027', height: Platform.OS === 'android' ? 5: 0 },
            headerTintColor: 'white',
            headerTitle: props => (
              <Text style={{ 
                color: 'white', 
                fontSize: 25, 
                fontFamily: 'IBMPlexMono-Bold',
                marginLeft: Platform.OS === 'ios' ? 0 : '5%',
                marginTop: Platform.OS === 'ios' ? 0 : '0.5%'
              }}>
                {title}
              </Text>
            ),
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
          title: 'HTML Quiz',
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

  // progress
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