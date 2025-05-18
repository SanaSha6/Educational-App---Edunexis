import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, Alert, Platform, Dimensions } from 'react-native'
import { Searchbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// component
import Header from '../../components/header'

// List of screens in settings
import TimeSpent from './ScreensList/time-spent'
import ActivityLog from './ScreensList/activity-log'
import TermOfServices from './ScreensList/ToS'
import ManageClass from './ScreensList/manage-class'

// header right screens
import Profile from '../main-screens/profile'
import Notifications from '../main-screens/notifications';

const Stack = createNativeStackNavigator();

// list of screens data
const settingListScreens = [
  {id: 1, title: 'Time spent', screen: 'Time Spent', showAsModal: false, icon: 'timer', iconType: 'MaterialIcons'},
  {id: 2, title: 'Activity log', screen: 'Activity Log', showAsModal: false, icon: 'list', iconType: 'Feather'},
  {id: 3, title: 'Terms of Services', screen: 'Term of Services', showAsModal: false, icon: 'file-text', iconType: 'Feather'},
  {id: 4, title: 'App version', screen: 'App Version', showAsModal: true, icon: 'information', iconType: 'Ionicons'},
  {id: 5, title: 'Switch accounts', screen: 'Switch Accounts', showAsModal: true, icon: 'repeat', iconType: 'Feather'},
  {id: 6, title: 'Logout', icon: 'log-out', iconType: 'Feather', isLogout: true}
]

// accounts
const accounts = [
  { id: '1', name: 'Account 1', email: 'accountone@example.com', isActive: true },
  { id: '2', name: 'Account 2', email: 'accounttwo@example.com', isActive: false },
  { id: '3', name: 'Account 3', email: 'accountthree@example.com', isActive: false },
];

const { width } = Dimensions.get('window');

// for tablet
const isTablet = width >= 768;

const SettingScreen = () => {
  const navigation = useNavigation();

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const filteredData = settingListScreens.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // modal for app version
  const [isModalVisibleAV, setIsModalVisibleAV] = useState(false);
  const [modalTitleAV, setModalTitleAV] = useState('');
  const [modalContentAV, setModalContentAV] = useState('');

  // modal for switch account
  const [isModalVisibleSA, setIsModalVisibleSA] = useState(false);
  
  // Current selected account (for demonstration purposes)
  const [currentAccount, setCurrentAccount] = useState(accounts[0]);

  const logoutAlert = () => {
    Alert.alert(
      "Logout",
      "Would you like to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Yes", 
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  const handleItemPress = (item) => {
    if (item.showAsModal) {
      // Set modal content based on item
      if (item.title === 'App version') {
        setModalTitleAV('App Version');
        setModalContentAV('Current version: 1.2.3\nLast updated: May 2025');
        setIsModalVisibleAV(true);
      } else if (item.title === 'Switch accounts') {
        setIsModalVisibleSA(true);
      }
    } else {
      // navigate to respective screen
      navigation.navigate(item.screen);
    }
  };

  const handleAccountSwitch = (account) => {
    // Update current account
    setCurrentAccount(account);
    // Close the modal
    setIsModalVisibleSA(false);
    Alert.alert(
      "Account Switched",
      `You've switched to ${account.name}`,
      [{ text: "OK" }]
    );
  };
  
  const renderAccountItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.accountItem} 
      onPress={() => handleAccountSwitch(item)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.accountAvatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={{ flex: 1}}>
          <Text style={styles.accountName}>{item.name}</Text>
          <Text style={styles.accountEmail}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  // icons each screens in the settings
  const renderIcon = (item) => {
    switch(item.iconType) {
      case 'MaterialIcons':
        return <MaterialIcons name={item.icon} size={26} color="white" style={styles.iconsItem} />;
      case 'Ionicons':
        return <Ionicons name={item.icon} size={26} color="white" style={styles.iconsItem}/>;
      case 'Feather':
        return <Feather name={item.icon} size={26} color="white" style={styles.iconsItem}/>;
      default:
        return <MaterialIcons name="settings" size={26} color="white" style={styles.iconsItem}/>;
    }
  };

  
    // height of the screen
    const autoHeight = () => {
      if (filteredData.length === 1) { // 1 data rendered
        return{ paddingBottom: isTablet ? 900 : 700 }
      } else if (filteredData.length === 5) { // 5 data rendered
        return { paddingBottom: isTablet ? 400 : 370 }
      } else if (filteredData.length === 4) { // 4 data rendered
        return { paddingBottom: isTablet ? 530 : 450 }
      } else if (filteredData.length === 3) { // 3 data rendered
        return { paddingBottom: isTablet ? 640 : 470 }
      } else if (filteredData.length === 2) { // 2 data rendered
        return { paddingBottom: isTablet ? 800 : 600 }
      } else if (filteredData.length === 0) { // 0 data
        return { paddingBottom: 750 }
      } else {
        return{ paddingBottom: isTablet ? 300 : 200 }
      }
    }

  return(
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}>

      <Header title='Settings'/>  

      <FlatList
        ListHeaderComponent={
          <>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            style={styles.searchBar}
            onChangeText={onChangeSearch}
            inputStyle={{ color: 'black' }}
            iconColor="black"
          />
          </>
        }
        contentContainerStyle={autoHeight()}
        // Add the logout button to the data array
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.settingScreensContainer}
            activeOpacity={0.5}
            onPress={item.isLogout ? logoutAlert : () => handleItemPress(item)}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconContainer}>
                {item.isLogout ? <Feather name="log-out" size={30} color="white" style={styles.iconsItem}/> : renderIcon(item)}
              </View>
              <Text style={styles.settingScreensTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No results found.</Text>
          </View>
        }
      />

      {/* App Version Modal */}
      <Modal visible={isModalVisibleAV} transparent={true} animationType="fade">
        <View style={styles.modalOverlayAV}>
          <View style={styles.modalViewAV}>
            <Text style={styles.modalTitleAV}>{modalTitleAV}</Text>
            <Text style={styles.modalContentAV}>{modalContentAV}</Text>
            <Button 
              mode="contained" 
              onPress={() => setIsModalVisibleAV(false)}
              style={styles.closeButton}
              labelStyle={{color: 'black'}}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>

      {/* Switch Accounts Modal */}
      <Modal animationType="slide" transparent={true} visible={isModalVisibleSA}>
        <View style={styles.modalContainerSA}>
          <View style={styles.modalContentSA}>
            <View style={styles.modalHeaderSA}>
              <Text style={styles.modalTitleSA}>Select Account</Text>
              <TouchableOpacity onPress={() => setIsModalVisibleSA(false)}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={accounts}
              renderItem={renderAccountItem}
              keyExtractor={item => item.id}
              style={{marginBottom: 16}}
            />
            
            <TouchableOpacity 
              style={styles.addAccountButton}
              onPress={() => {
                setIsModalVisibleSA(false);
                // Navigate to add account screen or show add account form
                Alert.alert("Add Account", "Add account feature coming soon!");
              }}
            >
              <Feather name="plus-circle" size={20} color="white" />
              <Text style={styles.addAccountText}>Add another account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            
    </LinearGradient>
  )
}

export default function Settings(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={SettingScreen} options={{ headerShown: false }}/>
      <Stack.Screen 
        name='Time Spent' 
        component={TimeSpent}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: '#0F2027' },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold', fontSize: 25 },
          })}
      />
      <Stack.Screen 
        name='Activity Log' 
        component={ActivityLog}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: '#0F2027' },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'IBMPlexMono-Bold', fontSize: 25 },
          })}
        />
      <Stack.Screen 
        name='Term of Services' 
        component={TermOfServices} 
        options={{ headerShown: false }}/>
      <Stack.Screen name='Manage Classes' component={ManageClass}/>

      {/* header right screens */}
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false}}/>
      <Stack.Screen 
        name='Notifcations' 
        component={Notifications} 
        options={{ headerShown: false}}
      /> 
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    paddingBottom: 10 
  },
  
  // Search
  searchBar:{
    marginHorizontal: '5%',
    backgroundColor: 'white',
    marginTop: '5%',
  },

  // flatlist/ list of screens in settings
  settingScreensContainer:{
    flex: 1,
    marginTop: '5.5%',
    paddingBottom: 15,
    borderRadius: 20,
    marginHorizontal: '5%',
    backgroundColor: '#00000080',
    marginBottom: Platform.OS === 'ios' ? -30 : -13   
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 22 : 8,
    paddingHorizontal: 15,
  },
  iconContainer: {
    marginRight: '4%',
  },
  iconsItem:{
    marginTop: '65%'
  },
  settingScreensTitle:{
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 23,
    color: 'white',
    paddingTop: Platform.OS === 'ios' ? 13: '4.2%'
  },
 
  // App version modal sytles
  modalOverlayAV: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalViewAV: {
    width: '80%',
    backgroundColor: '#0F2027',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitleAV: {
    fontFamily: 'NeueMontreal-Bold',
    fontSize: 22,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContentAV: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  closeButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  
  // Switch Accounts Modal styles
  modalContainerSA: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentSA: {
    backgroundColor: '#0F2027',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '70%',
  },
  modalHeaderSA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  modalTitleSA: {
    fontSize: 18,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'white',
  },

  // items styles inside the SA modal
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  accountAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'NeueMontreal-Bold'
  },
  accountName: {
    fontSize: 16,
    fontFamily: 'SpaceMono-Bold',
    color: 'white',
  },
  accountEmail: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
    fontFamily: 'SpaceMono-Regular',
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    color: 'white'
  },
  addAccountText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },

    // empty search
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: isTablet ? 170 : 0
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SpaceMono-Bold',
  },
})