import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// Screens
import Home from '../screens/main-screens/home'
import Subjects from '../screens/main-screens/subjects'
import Settings  from '../screens/settings/settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Subjects') {
            iconName = 'albums-outline';
          } else if (route.name === 'Shop') {
            iconName = 'bag-handle-outline';
          } else if (route.name === 'Settings') {
            iconName = "menu-outline";
          }

          return <Ionicons name={iconName} size={size} color={color}/>;
        },

        headerShown: false,
        tabBarActiveTintColor: '#0F2027',
        tabBarInactiveTintColor: '#9f9f9f',
        tabBarStyle: {
          backgroundColor: '#efefef',
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 5,
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 20,
          height: 70,
          position: 'absolute'
        },
        tabBarLabelStyle:{
          paddingTop: 5,
          fontFamily: 'SpaceMono-Regular'
        } 
      })}
    >
      <Tab.Screen name='Home' component={Home}
          options={({ route }) => ({
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

              if (routeName === 'Profile' || routeName === 'Notifcations' || routeName === 'HTML Screen' || routeName === 'CSS Screen' || routeName === 'JS Screen') {
                return { display: 'none' };
              }
              return { 
                display: 'flex',  
                backgroundColor: '#efefef',
                borderTopWidth: 0,
                paddingBottom: 10,
                paddingTop: 5,
                marginHorizontal: 10,
                marginBottom: 10,
                borderRadius: 20,
                height: 70,
                position: 'absolute' };
          })(route),
        })}
      />
      <Tab.Screen name='Subjects' component={Subjects}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Subjects';

            if (routeName === 'HTML' || routeName === 'CSS' || routeName === 'JS' || routeName === 'JAVA' || routeName === 'REACT' || routeName === 'Profile' || routeName === 'Notifcations') {
              return { display: 'none' };
            }
            return { 
              display: 'flex',  
              backgroundColor: '#efefef',
              borderTopWidth: 0,
              paddingBottom: 10,
              paddingTop: 5,
              marginHorizontal: 10,
              marginBottom: 10,
              borderRadius: 20,
              height: 70,
              position: 'absolute' };
          })(route),
        })}
      />
      <Tab.Screen name='Settings' component={Settings}
      options={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Settings';

          if (routeName === 'Time Spent' || routeName === 'Activity Log' || routeName === 'Term of Services' || routeName === 'Manage Classes' || routeName === 'Profile' || routeName === 'Notifcations') {
            return { display: 'none' };
          }
          return { 
            display: 'flex',  
            backgroundColor: '#efefef',
            borderTopWidth: 0,
            paddingBottom: 10,
            paddingTop: 5,
            marginHorizontal: 10,
            marginBottom: 10,
            borderRadius: 20,
            height: 70,
            position: 'absolute' };
        })(route),
      })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;