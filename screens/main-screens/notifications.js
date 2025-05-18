import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Notifications() {
  // Today notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      time: '07:19 PM',
      message: 'A new log in on your account...',
      expanded: false,
      details: 'Someone logged into your account from a new device in City of San Fernando, La Union. If this wasn\'t you, please secure your account immediately.'
    },
    {
      id: 2,
      time: '05:20 PM',
      message: 'New announcement...',
      expanded: false,
      details: 'We are gladly to informed you that we have new feature called Quiz where you can test your knowledge and skill to a specific subject of your choice!'
    },
    {
      id: 3,
      time: '03:12 PM',
      message: 'New assignment...',
      expanded: false,
      details: 'A new assignment has been posted in your Math class. Due date: Next Friday.'
    },
    {
      id: 4,
      time: '12:58 PM',
      message: 'DEADLINE Tomorrow...',
      expanded: false,
      details: 'Your Physics project submission is due tomorrow at 11:59 PM. Make sure to upload your final work before the deadline.'
    }
  ]);

  const toggleExpand = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? {...notification, expanded: !notification.expanded} 
        : notification
    ));
  };

  // Last 7 days notification data
  const [notifications7, setNotifications7] = useState([
    {
      id: 1,
      time: 'Monday',
      message: 'Your grade has been updated...',
      expanded: false,
      details: 'Your grade for HTML Lesson has been posted. Check your grades section to view your results.'
    },
    {
      id: 2,
      time: 'Sunday',
      message: 'System maintenance...',
      expanded: false,
      details: 'The platform will be unavailable from 2:00 AM to 5:00 AM on Wednesday for scheduled system maintenance and updates.'
    },
    {
      id: 3,
      time: 'Friday',
      message: 'Course enrollment opened...',
      expanded: false,
      details: 'Registration for summer courses is now open. Limited slots available for popular classes. Enroll now to secure your spot.'
    },
    {
      id: 4,
      time: 'Wednesday',
      message: 'Assignment submitted...',
      expanded: false,
      details: 'Your CSS assignment has been successfully submitted. You will receive feedback within 5-7 days.'
    }
  ]);

  const toggleExpand7 = (id) => {
    setNotifications7(notifications7.map(notification => 
      notification.id === id 
        ? {...notification, expanded: !notification.expanded} 
        : notification
    ));
  };

  // Last 30 days notification data
  const [notifications30, setNotifications30] = useState([
    {
      id: 1,
      time: 'Apr 25',
      message: 'Scholarship opportunity...',
      expanded: false,
      details: 'New scholarship applications are now open for the Fall semester. Deadline to apply is June 15th. Check the financial aid office for more details.'
    },
    {
      id: 2,
      time: 'Apr 18',
      message: 'Password changed...',
      expanded: false,
      details: 'Your account password was successfully changed. If you did not make this change, please contact support immediately.'
    },
    {
      id: 3,
      time: 'Apr 12',
      message: 'Campus event announcement...',
      expanded: false,
      details: 'Annual Spring Festival will be held on May 5th at the main quad. Join us for food, music, and activities from 11:00 AM to 8:00 PM.'
    },
    {
      id: 4,
      time: 'Apr 05',
      message: 'Course survey available...',
      expanded: false,
      details: 'Please complete the end-of-term survey for all your enrolled courses. Your feedback helps us improve our teaching methods and curriculum.'
    }
  ]);

  const toggleExpand30 = (id) => {
    setNotifications30(notifications30.map(notification => 
      notification.id === id 
        ? {...notification, expanded: !notification.expanded} 
        : notification
    ));
  };

  const navigation = useNavigation();

  return (
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
      style={styles.linearGradient}>

      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
          >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.Title}>Notifications</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* today */}
        <Text style={styles.time}>Today</Text>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.notifContainer}>
              <TouchableOpacity 
                style={styles.notifPlacements}
                onPress={() => toggleExpand(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.notifTitle}>{item.time}</Text>
                <Ionicons 
                  name={item.expanded ? "chevron-up" : "chevron-down"} 
                  size={24} 
                  color="white" 
                />
              </TouchableOpacity>
              <Text style={styles.messageText}>{item.message}</Text>
              {item.expanded && (
                <View style={styles.expandedContent}>
                  <Text style={styles.detailsText}>{item.details}</Text>
                </View>
              )}
            </View>
          )}
          scrollEnabled={false}
        />

          {/* 7 days */}
        <Text style={[styles.time, {marginTop: -20}]}>Last 7 days</Text>
        <FlatList
          data={notifications7}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.notifContainer}>
              <TouchableOpacity 
                style={styles.notifPlacements}
                onPress={() => toggleExpand7(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.notifTitle}>{item.time}</Text>
                <Ionicons 
                  name={item.expanded ? "chevron-up" : "chevron-down"} 
                  size={24} 
                  color="white" 
                />
              </TouchableOpacity>
              <Text style={styles.messageText}>{item.message}</Text>
              {item.expanded && (
                <View style={styles.expandedContent}>
                  <Text style={styles.detailsText}>{item.details}</Text>
                </View>
              )}
            </View>
          )}
          scrollEnabled={false}
        />

        {/* last 30 days */}
        <Text style={[styles.time, {marginTop: -20}]}>Last 30 days</Text>
        <FlatList
          data={notifications30}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.notifContainer}>
              <TouchableOpacity 
                style={styles.notifPlacements}
                onPress={() => toggleExpand30(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.notifTitle}>{item.time}</Text>
                <Ionicons 
                  name={item.expanded ? "chevron-up" : "chevron-down"} 
                  size={24} 
                  color="white" 
                />
              </TouchableOpacity>
              <Text style={styles.messageText}>{item.message}</Text>
              {item.expanded && (
                <View style={styles.expandedContent}>
                  <Text style={styles.detailsText}>{item.details}</Text>
                </View>
              )}
            </View>
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1, 
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
    // header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
    paddingTop: 13
  },
  
  // title
  Title: {
    fontFamily: 'IBMPlexMono-Bold',
    color: 'white',
    fontSize: 27,
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: '3%'
  },
  
  // Time
  time:{
    fontFamily: 'SpaceMono-Bold',
    fontSize: 25,
    color: 'white',
    paddingLeft: '4%',
    paddingBottom: '5%',
    marginVertical: -10

  },

  // notification styles
  notifContainer: {
    borderWidth: 1,
    borderColor: '#FFFFFF70',
    borderRadius: 10,
    backgroundColor: '#00000080',
    width: '100%',
    marginBottom: 7,
  },
  notifTitle: {
    fontFamily: 'NeueMontreal-Bold',
    fontSize: 22,
    color: 'white',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    marginTop: -10,
    fontFamily: 'SpaceMono-Regular',
  },
  notifPlacements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  // expansion after pressed
  expandedContent: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: -20,
 
  },
  detailsText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'SpaceMono-Regular',
    lineHeight: 20,
  }
});