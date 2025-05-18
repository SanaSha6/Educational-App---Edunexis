import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Paper
import { TextInput, Button } from 'react-native-paper';

// Validators
import { emailValidator, passwordValidator } from '../../core/utils';

// components
import Logo from '../../components/logo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  // for toggle visible/hide of password
  const [secureText, setSecureText] = useState(true);

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      // Get users from AsyncStorage
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      
      // finding user with their email and password in the AsyncStorage
      const user = users.find(
        user => user.email === email.value && user.password === password.value
      );
      
      if (user) {
        // Store login credentials
        await AsyncStorage.setItem('userToken', 'login-token-' + Date.now());
        await AsyncStorage.setItem('userEmail', email.value);
        
        navigation.navigate('MainTabs');
      } else {
        Alert.alert('Error!', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error!', 'Error during login: ' + error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}
      >
      <View style={styles.logoname}>
        <Logo />
        <Text style={styles.welcomeBack}>Welcome Back!</Text>
      </View>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.textInput}
        mode="flat"
        activeOutlineColor="#800000"
        theme={{
          colors: {
            primary: 'black',
          },
        }}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={secureText}
        style={styles.textInput}
        mode="flat"
        activeOutlineColor="#800000"
        theme={{
          colors: {
            primary: 'black',
          },
        }}
        right={
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)}
          />
        }
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={_onLoginPressed}
        style={styles.loginButton}
        labelStyle={{ fontFamily: 'SpaceMono-Regular', fontSize: 16 }}
      >
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Get Started')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  // logo
  logoname: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  // welc back
  welcomeBack: {
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
    color: 'white',
  },

  // text inputs
  textInput: {
    marginHorizontal: '8%',
    marginVertical: '3%',
  },

  // login button
  loginButton: {
    marginHorizontal: '8%',
    paddingVertical: '1.8%',
    backgroundColor: '#14252b',
    borderRadius: 5,
    marginTop: '3.5%',
  },

  // forgot passs
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 24,
    marginRight: '7.7%',
  },

  // sign up
  label: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'SpaceMono-Regular',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },

  link: {
    fontFamily: 'SpaceMono-Regular',
    color: '#4890e8',
    fontSize: 15,
  },

  // loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'SpaceMono-Regular'
  },
});

export default Login;