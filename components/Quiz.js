// Quiz.js - Quiz component for React Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const Quiz = ({ lessonTags, difficulty = 'Easy', onComplete, navigation }) => {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Fixed API key - corrected case sensitivity and any typos
  const API_KEY = 'IcEmnYHmq8k8y1hqkgJSAnOAwFydOSgRILy0kfuq'; 
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          headers: {
            'X-Api-Key': API_KEY,
          },
          params: {
            tags: lessonTags,
            difficulty: difficulty,
            limit: 10
          }
        });
    
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quiz questions. Please try again later.');
        setLoading(false);
        console.error('QuizAPI error:', err?.response?.data || err.message);
      }
    };
     
    fetchQuestions();
  }, [lessonTags, difficulty]);
  
  const handleAnswerSelect = (questionId, answerId) => {
    setCurrentAnswers({
      ...currentAnswers,
      [questionId]: answerId
    });
  };
  
  const handleSubmitQuiz = () => {
    // THis will calculate the score
    let correctCount = 0;
    
    questions.forEach(question => {
      const userAnswer = currentAnswers[question.id];
      const correctAnswers = question.correct_answers;
      
      //  it will chheck if the user's answer matches any of the correct answers
      const isCorrect = userAnswer && correctAnswers[`${userAnswer}_correct`] === 'true';
      
      if (isCorrect) {
        correctCount++;
      }
    });
    
    const finalScore = (correctCount / questions.length) * 100;
    setScore(finalScore);
    setQuizCompleted(true);
    
    // Pass results to parent component if needed
    // backup solution if it didn't work
    if (onComplete) {
      onComplete({
        score: finalScore,
        totalQuestions: questions.length,
        correctAnswers: correctCount
      });
    }
  };

  if (loading) {
    return (
      <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']}  style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Loading quiz questions...</Text>
      </LinearGradient>
    );
  }
  
  if (error) {
    return (
      <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']} style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Go Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
  
  if (questions.length === 0) {
    return (
      <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']} style={styles.errorContainer}>
        <Text style={styles.errorText}>No questions available for these topics.</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Go Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
  
  return (
    <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Quiz</Text>
        
        {!quizCompleted ? (
          <>
            {questions.map((question, index) => (
              <View key={question.id} style={styles.questionCard}>
                <Text style={styles.questionNumber}>Question {index + 1}</Text>
                <Text style={styles.questionText}>{question.question}</Text>
                
                <View style={styles.answerOptions}>
                  {Object.entries(question.answers)
                    .filter(([key, value]) => value !== null)
                    .map(([key, value]) => {
                      const answerId = key;
                      const isSelected = currentAnswers[question.id] === answerId;
                      
                      return (
                        <TouchableOpacity
                          key={key}
                          style={[
                            styles.answerOption,
                            isSelected && styles.selectedAnswer
                          ]}
                          onPress={() => handleAnswerSelect(question.id, answerId)}
                        >
                          <Text style={[
                            styles.answerText,
                            isSelected && styles.selectedAnswerText
                          ]}>
                            {value}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </View>
            ))}
            
            <TouchableOpacity
              style={[
                styles.submitButton,
                Object.keys(currentAnswers).length < questions.length && styles.disabledButton
              ]}
              disabled={Object.keys(currentAnswers).length < questions.length}
              onPress={handleSubmitQuiz}
            >
              <Text style={styles.submitButtonText}>Submit Quiz</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Quiz Results</Text>
            <Text style={styles.scoreText}>Your score: {score.toFixed(1)}%</Text>
            <Text style={styles.correctAnswersText}>
              Correct answers: {Math.round(score * questions.length / 100)} out of {questions.length}
            </Text>
            
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => {
                if (onComplete) {
                  onComplete({
                    score: score,
                    totalQuestions: questions.length,
                    correctAnswers: Math.round(score * questions.length / 100)
                  });
                }
                Alert.alert(
                  "Quiz Complete",
                  "Thank you for taking the quiz!",
                  [
                    { 
                      text: "Ok", 
                      onPress: () => navigation.navigate('Subj')
                    }
                  ]
                );
              }}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
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

  // errors
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'SpaceMono-Regular'
  },
  retryButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'SpaceMono-Regular'
  },

  // display
  title: {
    fontSize: 30,
    fontFamily: 'IBMPlexMono-Bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: -25
  },
  questionCard: {
    backgroundColor: '#00000090',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 16,
    fontFamily: 'NeueMontreal-Bold',
    color: '#666',
    marginBottom: 5,
    color: 'white'
  },
  questionText: {
    fontSize: 18,
    marginBottom: 15,
    color: 'white',
    fontFamily: 'NeueMontreal-Bold'
  },
  answerOptions: {
    marginTop: 10,
    color: 'white',
  },
  answerOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    color: 'white',
},
  selectedAnswer: {
    backgroundColor: 'gray',
    borderColor: 'black',
  },
  answerText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'SpaceMono-Regular'
  },
  selectedAnswerText: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  submitButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'SpaceMono-Regular'
  },
  resultsContainer: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 22,
    fontFamily: 'NeueMontreal-Bold',
    marginBottom: 15,
    color: 'white'
  },
  scoreText: {
    fontSize: 21,
    fontFamily: 'SpaceMono-Regular',
    color: '#007bff',
    marginBottom: 10,
    color: 'white'
  },
  correctAnswersText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
  continueButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  continueButtonText: {
    fontSize: 15,
    fontFamily: 'SpaceMono-Regular',
  },
});

export default Quiz;