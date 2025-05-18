import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../../components/editprofile'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  const fromScreen = route.params?.fromScreen;

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) {
        setUserName(storedName);
      }
    };

    loadName();
  }, []);

  const [userData, setUserData] = useState({
    profileImage: null,
    badges: [
      {id: 1, name: 'Elite', image: require('../../assets/Badges/badge4.png'), desc: 'Awarded to members who consistently demonstrate excellence in all aspects of their activities.'},
      {id: 2, name: 'Gold', image: require('../../assets/Badges/badge5.png'), desc: 'Recognizes outstanding contributions that have significantly impacted the community.'},
      {id: 3, name: 'Star', image: require('../../assets/Badges/badge6.png'), desc: 'Given to top performers who consistently achieve exceptional results.'},
      {id: 4, name: 'Certified', image: require('../../assets/Badges/badge7.png'), desc: 'Official verification of expertise and knowledge in specific domains.'},
      {id: 5, name: 'Verified', image: require('../../assets/Badges/badge8.png'), desc: 'Confirms the professional status and credibility of the member.'},
      {id: 6, name: 'Triple Star', image: require('../../assets/Badges/badge9.png'), desc: 'Highest recognition for those who have mastered multiple skills at expert level.'},
      {id: 7, name: 'Doc Badge', image: require('../../assets/Badges/badge10.png'), desc: 'Awarded for contributing valuable documentation and resources to the community.'},
      {id: 8, name: 'Award', image: require('../../assets/Badges/badge11.png'), desc: 'Special recognition for outstanding achievement in a specific category.'},
      {id: 9, name: 'Medals', image: require('../../assets/Badges/badge12.png'), desc: 'Celebrates champions who have earned multiple honors across various competitions.'}
    ],
    achievements: [
      {id: 1, name: 'Cup', image: require('../../assets/Achievements/trophy1.png'), desc: 'Classic single-handled trophy awarded for first place achievements in standard competitions.'},
      {id: 2, name: 'Trophy', image: require('../../assets/Achievements/trophy2.png'), desc: 'Traditional two-handled award presented to winners of prestigious tournaments.'},
      {id: 3, name: 'Chalice', image: require('../../assets/Achievements/trophy3.png'), desc: 'Elegant cup-shaped prize symbolizing excellence and distinguished performance.'},
      {id: 4, name: 'Bowl', image: require('../../assets/Achievements/trophy4.png'), desc: 'Rounded vessel trophy recognizing notable team or individual accomplishments.'},
      {id: 5, name: 'Star', image: require('../../assets/Achievements/trophy5.png'), desc: 'Stellar-shaped award celebrating standout performances in competitive events.'},
      {id: 6, name: 'Award', image: require('../../assets/Achievements/trophy6.png'), desc: 'Distinctive trophy topped with decorative star honoring exceptional merit.'},
      {id: 7, name: 'Globe', image: require('../../assets/Achievements/trophy7.png'), desc: 'Spherical trophy mounted on base representing international recognition and achievement.'},
      {id: 8, name: 'Champion', image: require('../../assets/Achievements/trophy8.png'), desc: 'Elaborate trophy with decorative flourishes reserved for ultimate victors.'},
      {id: 9, name: 'Winner', image: require('../../assets/Achievements/trophy9.png'), desc: 'Premium trophy with multiple stars signifying top-tier excellence across competitions.'}
    ]
  });

  useEffect(() => {
    if (route.params?.updatedUserData) {
      setUserData(prevData => ({
        ...prevData,
        name: route.params.updatedUserData.name,
        profileImage: route.params.updatedUserData.profileImage
      }));
    }
  }, [route.params?.updatedUserData]);

  const handleBack = () => {
    if (fromScreen) {
      navigation.navigate(fromScreen);
    } else {
      navigation.goBack();
    }
  };

  const renderBadges = () => (
    <View style={styles.contentContainer}>
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.Row}>
          {userData.badges
            .slice(rowIndex * 3, (rowIndex + 1) * 3)
            .map(badge => (
              <Pressable 
                key={badge.id} 
                style={styles.Item}
                onPress={() => Alert.alert(badge.name, badge.desc)}
              >
                <View style={styles.IconContainer}>
                  <Image source={badge.image} style={styles.Icon} />
                </View>
                <Text style={styles.Text}>{badge.name}</Text>
              </Pressable>
            ))}
        </View>
      ))}
    </View>
  );

  const renderAchievements = () => (
    <View style={styles.contentContainer}>
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <View key={`row-${rowIndex}`} style={[styles.Row, { marginLeft: -10 }]}>
          {userData.achievements
            .slice(rowIndex * 3, (rowIndex + 1) * 3)
            .map(achievement => (
              <Pressable 
                key={achievement.id} 
                style={styles.Item}
                onPress={() => Alert.alert(achievement.name, achievement.desc)}
              >
                <View style={styles.IconContainer}>
                  <Image source={achievement.image} style={styles.Icon} />
                </View>
                <Text style={styles.Text}>{achievement.name}</Text>
              </Pressable>
            ))}
        </View>
      ))}
    </View>
  );

  const [activeTab, setActiveTab] = useState('badges');
  return (
    <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']} style={styles.linearGradient}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.replace('EditProfile', {
            updatedUserData: userData,
            fromScreen: fromScreen
          })}
        >
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          {userData.profileImage ? (
            <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              <Ionicons name="person" size={50} color="white" />
            </View>
          )}
        </View>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <View style={styles.tabNavigation}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'badges' && styles.activeTabButton]}
          onPress={() => setActiveTab('badges')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'badges' && styles.activeTabButtonText]}>
            BADGES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'achievements' && styles.activeTabButton]}
          onPress={() => setActiveTab('achievements')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'achievements' && styles.activeTabButtonText]}>
            ACHIEVEMENT
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {activeTab === 'badges' ? renderBadges() : renderAchievements()}
      </ScrollView>
    </LinearGradient>
  );
};

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  editButton: {
    padding: 8,
  },

  // profile
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00000010',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 15,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  profileImagePlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 22,
    fontFamily: 'NeueMontreal-Bold',
    color: 'white',
  },

  // badges and achievements
  tabNavigation: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginRight: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  tabButtonText: {
    color: 'white',
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 25
  },
  activeTabButtonText: {
    color: 'white',
  },
  Row:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    width: '100%',
    height: 85, 
    marginHorizontal: -10
  },
  Icon: {
    width: 130,
    height: 100,
    resizeMode: 'contain' 
  },
  Item: {
    flex: 1,
    marginTop: '8%',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10
  },
  Text: {
    marginTop: '23%',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 12,  
    textAlign: 'center',
    color: 'white'
  }
});