import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Header = ({ title }) => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={[
      styles.safeArea,
      { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }
    ]}>
      <View style={
        styles.header
      }>
        <Text 
          style={styles.appName} 
          numberOfLines={1} 
          adjustsFontSizeToFit
        >
          {title}
        </Text>
        
        <View style={styles.iconContainer}>
          <IconButton
            icon={({ size, color }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            )}
            iconColor="white"
            size={width < 380 ? 28 : 35}
            onPress={() => navigation.navigate('Profile')}
            style={styles.profileIcon}
          />
          <IconButton
            icon={({ size, color }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            )}
            iconColor="white"
            size={width < 380 ? 26 : 33}
            onPress={() => navigation.navigate('Notifcations')}
            style={styles.notificationIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 10,
    width: '100%',
  },
  appName: {
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: width < 380 ? 28 : 33,
    color: 'white',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    margin: 0,
    marginTop: 5
  },
  notificationIcon: {
    margin: 0,
    marginTop: 5
}
});

export default Header;