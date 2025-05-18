import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login Screens
import SignUp from './screens/login-screens/sign-up'
import Login from './screens/login-screens/login-screen'
import ForgotPassword from './screens/login-screens/forgot-pass';
import TabNavigator from './navigation/tab-navigator';

// components
import Logo from './components/logo'

// tos
import ToS from './screens/settings/ScreensList/ToS'

const { width, height } = Dimensions.get('window');

// for tablet
const isTablet = width >= 768;

const getResponsiveWidth = () => {
  if (width >= 768) return 365; // tablet
  if (width >= 414) return 345; // large phone (phone ni pat)
  return 330; // small/medium phone
};

const getResponsiveHeight = () => {
  if (height >= 960) return 90; // tablet
  if (height >= 847) return 72; // large phone (phone ni pat)
  return 72; // small/medium phone
};

const Stack = createNativeStackNavigator();

const StartScreen = ({ navigation }) => (
  // Wrapper
  <LinearGradient 
    colors={['#0F2027', '#2f5866', '#32657a']} 
    style={styles.linearGradient}>

    <StatusBar style="light"/>

    {/* Logo and app title */}
    <View style={styles.logonameContainer}>
      <Logo/>
    </View>

    {/* Welcoming text */}
    <View>
      <Text style={[styles.description, {textAlign: 'center'}]}>Welcome to our educational app, your gateway to fun and effective learning</Text>
    </View>
    
    {/* sign up or login */}
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Get Started')}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>Get Started</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[styles.buttonStyle, {backgroundColor: 'transparent', borderWidth: 3, borderColor: 'white'}]}
      >
        <Text style={[styles.buttonTextStyle, {color: 'white'}]}>Login</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
)
export default function Start() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'NeueMontreal-Bold': require('./assets/fonts/PPNeueMontreal-Bold.otf'),
    'IBMPlexMono-Bold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/SpaceMono-Bold.ttf')
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Login screens */}
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Get Started" component={SignUp}/>
        <Stack.Screen name="Sign Up" component={Login} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword}/>
        <Stack.Screen name="MainTabs" component={TabNavigator}/>
        <Stack.Screen name="ToS" component={ToS}/>
      </Stack.Navigator>
    </NavigationContainer>       
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  linearGradient:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'     
  },

  // logo and name
  logonameContainer:{
    alignItems: 'center',
  },
  description:{
    fontFamily: 'SpaceMono-Regular',
    fontSize: 13,
    padding: 25,
    color: 'white'
  },

  // buttons
  buttonStyle:{
    paddingVertical: isTablet ? 29 : 20,
    width: getResponsiveWidth(),
    height: getResponsiveHeight(),
    backgroundColor: '#14252b',
    margin: 10,
    borderRadius: 5,
  },
  buttonTextStyle:{
    fontFamily: 'SpaceMono-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginTop: 6
  }
});

