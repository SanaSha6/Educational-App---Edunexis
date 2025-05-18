import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const initialLogs = [
  { id: 1, action: 'Login successful', timestamp: '2025-05-12T12:45:00', details: 'IP: 192.168.1.1' },
  { id: 2, action: 'Password changed', timestamp: '2025-05-11T10:23:15', details: 'Via forgot password screen' },
  { id: 3, action: 'Navigation to Profile', timestamp: '2025-05-11T09:15:22', details: 'From home screen' },
  { id: 4, action: 'Profile name updated', timestamp: '2025-05-10T14:30:45', details: 'Updated display name' },
  { id: 5, action: 'Login attempt failed', timestamp: '2025-05-09T08:12:36', details: 'Wrong password' },
  {id: 6, action: 'Navigation to HTML', timestamp: '2025-05-07T21:42:00', details: 'From subjects screen'},
  {id: 7, action: 'Profile picture\nupdated', timestamp: '2025-05-05T17:12:29', details: 'Updated profile picture'},
  {id: 8, action: 'Profile new badge\ngained', timestamp: '2025-05-05T17:06:19', details: 'You unlock a new badge'},
  {id: 9, action: 'Navigation to\nJavascript', timestamp: '2025-05-02T22:42:32', details: 'From subjects screen'}
];

export default function ActivityLogScreen({ navigation }){
 const [logs, setLogs] = useState(initialLogs);
  const [filter, setFilter] = useState('all');

  // Format timestamp to a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  // Filter logs based on selected filter
  const filteredLogs = () => {
    if (filter === 'all') return logs;
    return logs.filter(log => log.action.toLowerCase().includes(filter));
  };

  return (
    <LinearGradient
      colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}
    >
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]} 
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'login' && styles.filterButtonActive]} 
          onPress={() => setFilter('login')}
        >
          <Text style={[styles.filterText, filter === 'login' && styles.filterTextActive]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'profile' && styles.filterButtonActive]} 
          onPress={() => setFilter('profile')}
        >
          <Text style={[styles.filterText, filter === 'profile' && styles.filterTextActive]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'navigation' && styles.filterButtonActive]} 
          onPress={() => setFilter('navigation')}
        >
          <Text style={[styles.filterText, filter === 'navigation' && styles.filterTextActive]}>Navigation</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredLogs()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <View style={styles.logHeader}>
              <Text style={styles.logAction}>{item.action}</Text>
              <Text style={styles.logTimestamp}>{formatDate(item.timestamp)}</Text>
            </View>
            <Text style={styles.logDetails}>{item.details}</Text>
          </View>
          )}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF35',
  },
  filterButtonActive: {
    backgroundColor: 'white',
  },
  filterText: {
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
    fontSize: 14
  },
  filterTextActive: {
    color: 'black',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logItem: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  logAction: {
    fontFamily: 'IBMPlexMono-Bold',
    color: 'white',
    fontSize: 14,
  },
  logTimestamp: {
    fontFamily: 'SpaceMono-Regular',
    color: 'gray',
    fontSize: 12,
  },
  logDetails: {
    fontFamily: 'SpaceMono-Regular',
    color: 'white',
    fontSize: 12,
  },
});

