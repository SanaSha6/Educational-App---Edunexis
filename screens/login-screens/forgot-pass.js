import React, { useState } from 'react';
import { Text, StyleSheet, Alert, View, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// Paper
import { TextInput, Button } from 'react-native-paper';

// components
import Logo from '../../components/logo'

// Validator
import { emailValidator } from '../../core/utils';

const _onSendPressed = () => {
  const emailError = emailValidator(email.value);

  if (emailError) {
    setEmail({ ...email, error: emailError });
    return;
  }

  Alert.alert('Login', 'An email has been sent to your email address');
  navigation.navigate('Login');
};

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);
  
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
  
    // Show alert and delay navigation
    Alert.alert('Login', 'An email has been sent to your email address',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );
  };
  

  return (
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>

      <View style={styles.logoname}>
        <Logo/>
        <Text style={styles.restorePass}>Restore Password</Text>
      </View>
  
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        mode="flat"
        activeOutlineColor='#800000'
        theme={{
          colors: {
            primary: 'black',
            placeholder: 'gray',
          },
        }}
        style={styles.textInput}
      />

      <Button 
      mode="contained"   
      onPress={_onSendPressed} 
      style={styles.resetInstrucButton}
      labelStyle={{fontFamily: 'SpaceMono-Regular', fontSize: 15,}}
      >
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
    justifyContent: 'center'
  },

  // logo
  logoname:{
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '3%'
  },

  // Restore pass
  restorePass:{
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
    marginVertical: '3%'
  },

  // reset instruc
  resetInstrucButton:{
    marginTop: '-1.6%',
    marginHorizontal: '8%',
    paddingVertical: '1.8%',
    backgroundColor: '#14252b',
    borderRadius: 5,
    marginTop: '3.5%'
  },

  back: {
    width: '100%',
    marginTop: 12,
    fontFamily: 'SpaceMono-Regular'
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginLeft: '8%',
    fontFamily: 'SpaceMono-Regular'
  },
});

export default (ForgotPassword);