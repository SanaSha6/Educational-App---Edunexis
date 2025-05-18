import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfileScreen({ navigation, route }) {
  const { updatedUserData, fromScreen } = route.params || {};

  const [name, setName] = useState(updatedUserData?.name || null);
  const [profileImage, setProfileImage] = useState(updatedUserData?.profileImage || null);

  const pickImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission Required", "You need to grant gallery permissions to change your profile picture.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error", "There was an error selecting the image.");
      console.error(error);
    }
  };

const handleSave = async () => {
  try {
    if (name) {
      await AsyncStorage.setItem('userName', name);
    }

    Alert.alert(
      "Profile Updated",
      "Your profile has been successfully updated.",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.replace('Profile', {
              updatedUserData: {
                name,
                profileImage
              },
              fromScreen: fromScreen || null
            });
          }
        }
      ]
    );
  } catch (error) {
    console.error("Failed to save name to AsyncStorage", error);
    Alert.alert("Error", "Failed to save your profile changes.");
  }
};

  return (
    <LinearGradient colors={['#0F2027', '#2f5866', '#32657a']} style={styles.linearGradient}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            if (name) {
              await AsyncStorage.setItem('userName', name);
            }
            navigation.replace('Profile', {
              updatedUserData: {
                name,
                profileImage
              },
              fromScreen: fromScreen || null
            });
          }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit Profile</Text>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="checkmark" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.profileImageSection}>
          <View style={styles.profileImageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.profileImagePlaceholder}>
                <Ionicons name="person" size={50} color="white" />
              </View>
            )}
            <TouchableOpacity style={styles.changePhotoButton} onPress={pickImage}>
              <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.changePhotoText}>Change Profile Photo</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NeueMontreal-Bold',
  },
  backButton: { padding: 8 },
  saveButton: { padding: 8 },
  container: {
    flex: 1,
    padding: 20,
  },
  profileImageSection: {
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
  changePhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#595959',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  changePhotoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'SpaceMono-Bold',
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'SpaceMono-Bold',
  },
  textInput: {
    backgroundColor: '#00000070',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'white',
    fontSize: 16,
    fontFamily: 'SpaceMono-Regular',
  },
});
