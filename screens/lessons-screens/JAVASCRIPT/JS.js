import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import { ProgressBar, MD3Colors, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from 'react-native-vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// JS Lesson screen
import JSLesson1 from '../JAVASCRIPT/lesson-1'
import JSLesson2 from '../JAVASCRIPT/lesson-2'
import JSLesson3 from '../JAVASCRIPT/lesson-3'
import JSLesson4 from '../JAVASCRIPT/lesson-4'
import JSLesson5 from '../JAVASCRIPT/lesson-5'
import QuizScreen from '../../../components/Quiz'

// Subjects
const subjData = [
    {id: 1, title: 'JS Introduction', desc: 'Learn what JavaScript is, why it\'s used, and how it brings interactivity and functionality to websites.', progress: 0.3, lesson: 'Lesson 1'},
    {id: 2, title: 'JS Where To', desc: 'Understand where and how to include JavaScript in HTML files—inline, internal, or external scripts.', progress: 0.7, lesson: 'Lesson 2'},
    {id: 3, title: 'JS Output', desc: 'Explore various ways to display output in JavaScript, including alerts, console logs, and HTML manipulation.', progress: 0.4, lesson: 'Lesson 3'},
    {id: 4, title: 'JS Statements', desc: 'Learn how JavaScript statements work and how they are used to control the flow of a script.', progress: 0.1, lesson: 'Lesson 4'},
    {id: 5, title: 'JS Syntax', desc: 'Get familiar with the basic syntax rules of JavaScript, including keywords, identifiers, and proper structure.', progress: 0.5, lesson: 'Lesson 5'}
]

// Lesson screens
const lessonScreens = [
    {
        name: 'Lesson 1',
        component: JSLesson1,
        title: 'JS Introduction'
    },
    {
        name: 'Lesson 2',
        component: JSLesson2,
        title: 'JS Where To'
    },
    {
        name: 'Lesson 3',
        component: JSLesson3,
        title: 'JS Output'
    },
    {
        name: 'Lesson 4',
        component: JSLesson4,
        title: 'JS Statements'
    },
    {
        name: 'Lesson 5',
        component: JSLesson5,
        title: 'JS Syntax'
    }
];

const Stack = createNativeStackNavigator();

const JSSCreen = () => {
    const navigation = useNavigation();
    return(
    <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}>
      <View style={{ marginTop: -20}}>
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
      onPress={() => navigation.navigate('JS Screen')}
      style={{marginTop: Platform.OS === 'ios' ? -7 : 0}}
    >
      <Ionicons name="arrow-back" size={28} color="white" style={{paddingRight: 20, marginTop: 3}} />
    </TouchableOpacity>
  );
};

export default function JS(){
    return(
        <Stack.Navigator>
            {/* Main screen */}
            <Stack.Screen
                name='JS Screen'
                component={JSSCreen}
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
                    JAVASCRIPT
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
            
            {/* JS Lesson Screens */}
            {lessonScreens.map(({ name, component, title }) => (
            <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={({ navigation }) => ({
                headerShown: true,
                headerStyle: { backgroundColor: '#0F2027'},
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
                    title: 'JS Quiz',
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