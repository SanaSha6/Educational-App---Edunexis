import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// Header Screens
import Profile from '../../main-screens/profile'
import Notifications from '../../main-screens/notifications';

// React Native lesson screens
import Reactlesson1 from './lesson-1';
import Reactlesson2 from './lesson-2';
import Reactlesson3 from './lesson-3';
import Reactlesson4 from './lesson-4';
import Reactlesson5 from './lesson-5';
import QuizScreen from '../../../components/Quiz'

// Subjects
const subjData = [
  {id: 1, title: 'Introduction', desc: 'Learn what React Native is and set up your development environment to run your first mobile app using Expo.', progress: 0.3, lesson: 'Lesson 1'},
  {id: 2, title: 'Components and Styling', desc: 'Build UI layouts using reusable components, pass data with props, and style your app using StyleSheet and Flexbox.', progress: 0.7, lesson: 'Lesson 2'},
  {id: 3, title: 'State and User Input', desc: 'Make your app interactive by using useState and handling user input with buttons, text fields, and event listeners.', progress: 0.4, lesson: 'Lesson 3'},
  {id: 4, title: 'Navigation', desc: 'Implement multi-screen navigation using React Navigation and learn how to pass data between different screens.', progress: 0.1, lesson: 'Lesson 4'},
  {id: 5, title: 'Fetching Data', desc: 'Fetch live data from an API and display it in your app using useEffect and FlatList.', progress: 0.5, lesson: 'Lesson 5'}
]

// Lesson screens
const lessonScreens = [
  {
    name: 'Lesson 1',
    component: Reactlesson1,
    title: 'Introduction',
  },
  {
    name: 'Lesson 2',
    component: Reactlesson2,
    title: 'Components and Styling',
  },
  {
    name: 'Lesson 3',
    component: Reactlesson3,
    title: 'State and User Input'
  },
  {
    name: 'Lesson 4',
    component: Reactlesson4,
    title: 'Navigation'
  },
  {
    name: 'Lesson 5',
    component: Reactlesson5,
    title: 'Fetching Data'
  },
 
];

const Stack = createNativeStackNavigator();

const REACTScreen = () => {
  const navigation = useNavigation();
  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}>
      <View style={styles.wrapper}>
      <StatusBar style='light'/>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
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

export default function REACTNATIVE(){
  return(
  <Stack.Navigator>
    {/* Main screen */}
    <Stack.Screen         
      name='React Native Screen' 
      component={REACTScreen}
      options={({ navigation }) => ({ 
        headerShown: true,         
        headerStyle: {          
          backgroundColor: '#0F2027',
          height: 60,
        },
        headerTintColor: 'white',
        headerTitle: props => (
          <Text style={{ 
            color: 'white', 
            fontSize: 30, 
            fontFamily: 'IBMPlexMono-Bold' 
          }}>
            REACT NATIVE
          </Text>
        ),
      })}
    />

    {/* header screen */}
    <Stack.Screen name='Profile' component={Profile} options={{ headerShown: true }} />
    <Stack.Screen name='Notifcations' component={Notifications} options={{ headerShown: true }} />

    {/* React Lesson Screens */}
    {lessonScreens.map(({ name, component, title }) => (
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        options={() => ({
          headerShown: true,
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
          headerStyle: { backgroundColor: '#0F2027' },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold' }
        })}
      />
    ))}
    
    <Stack.Screen
      name='Quiz Screen'
      component={QuizScreen}
      options={() => ({
        headerShown: true,
        title: 'React Native Quiz',
        headerStyle: { backgroundColor: '#0F2027' },
        headerTintColor: 'white',
        headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold' }
      })}
    />
  </Stack.Navigator>
  )
}
 
const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15
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
    marginBottom: -15
  },
})