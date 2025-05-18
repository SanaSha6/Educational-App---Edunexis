import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Paper
import { TextInput, Button, Checkbox } from 'react-native-paper';

// Validators
import { emailValidator, passwordValidator, nameValidator } from '../../core/utils';

// components
import Logo from '../../components/logo';

const SignUp = ({ navigation }) => {
  // for creating acc
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  // for toggle visible/hide of password
  const [secureText, setSecureText] = useState(true);

  // for ToS
  const [checked, setChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const _onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    if (!checked) {
      setCheckboxError(true);
      Alert.alert('Agreement Required', 'Please agree to the Terms of Service before signing up.');
      return;
    }

    try {
      setCheckboxError(false);

      // Check if user already exists
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      
      // Check if email already exists
      const emailExists = users.some(user => user.email === email.value);
      if (emailExists) {
        setEmail({ ...email, error: 'This email is already registered' });
        return;
      }
      
      // Function to create a new user
      const newUser = {
        username: name.value,
        email: email.value,
        password: password.value, 
        createdAt: new Date().toISOString()
      };
      
      // Add the user in the AsyncStorage
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      await AsyncStorage.setItem('userName', name.value);
      
      Alert.alert(
        'Success!', 
        'Your account has been created successfully!',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('Error!', 'Error during sign up: ' + error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>

      <View style={styles.logoname}>
        <Logo/>
        <Text style={styles.createAcc}>Create Account</Text>
      </View>
      
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        style={styles.textInput}
        mode="flat"
        activeOutlineColor='#800000'
        theme={{
          colors: {
            primary: 'black'
          },
        }}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.textInput}
        mode="flat"
        activeOutlineColor='#800000'
        theme={{
        colors: {
          primary: 'black'
          },
        }}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={secureText}
        style={styles.textInput}
        mode="flat"
        activeOutlineColor='#800000'
        theme={{
          colors: {
            primary: 'black'
          },
        }}
        right={
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)}
          />
        }
      />

      <View style={{flexDirection: 'row', alignItems: 'center,', justifyContent: 'center'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
            setCheckboxError(false);
          }}
          color='white'
          uncheckedColor='white'
        />
        <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <Text style={[styles.label, {marginTop: 6}]}> I have read and agree to the </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ToS')}>
            <Text style={[styles.link, {marginTop: -15, marginRight: '3%'}]}>{'\n'}Terms of Service</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Button 
        mode="contained" 
        onPress={_onSignUpPressed} 
        labelStyle={{fontFamily: 'SpaceMono-Regular', fontSize: 17}} 
        style={styles.signUpButton}
      >
        Sign up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
  },
  // logo
  logoname:{
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '20%'
  },

  // create acc
  createAcc:{
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
    color: 'white'
  },

  // text inputs
  textInput:{
    marginHorizontal: '8%',
    marginVertical: '1.5%',
  },

  // Sign up 
  signUpButton:{
    marginTop: '4%',
    marginHorizontal: '8%',
    paddingVertical: '1.5%',
    backgroundColor: '#14252b',
    borderRadius: 3,
  },

  // already have acc
  row: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'SpaceMono-Regular'
  },
  link: {
    fontFamily: 'SpaceMono-Regular',
    color: '#4890e8',
    fontSize: 15
  },
});

export default SignUp;