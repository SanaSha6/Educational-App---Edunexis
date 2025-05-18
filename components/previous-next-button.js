import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper'

const PreviousNextButton = ({screen1, screen2, isLesson5 = false, quizScreen, tags}) =>{
  const navigation = useNavigation();

  const showQuizAlert = () => {
    Alert.alert(
      "Quiz Time",
      "Would you like to take the quiz now?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Take Quiz", 
          onPress: () => navigation.navigate(quizScreen, { lessonTags: tags})
        }
      ]
    );
  };

  return(
    <View style={styles.previousNextButtonContainer}>
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate(screen1)}
        style={styles.previousNextButton}
        labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular', fontSize: 13}}
      >
        Previous
      </Button>

      {!isLesson5 ? (
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate(screen2)}
          style={styles.previousNextButton}
          labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular', fontSize: 13}}
        >
          Next
        </Button>
      ) : (
        <Button 
          mode="contained" 
          onPress={showQuizAlert}
          style={styles.previousNextButton}
          labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular', fontSize: 13}}
        >
          Take Quiz
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  previousNextButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginVertical: 15,
  },
  previousNextButton:{
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10
  }
})

export default (PreviousNextButton);