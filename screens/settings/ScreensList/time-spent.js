import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// for tablet
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const TimeSpentScreen = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentLearningItems, setCurrentLearningItems] = useState([]);
  const [totalDayTime, setTotalDayTime] = useState('');
  
  const days = [
    { id: 0, short: 'S', full: 'Sunday', height: 50, date: 'Sun, May 4' },
    { id: 1, short: 'M', full: 'Monday', height: 35, date: 'Mon, May 5' },
    { id: 2, short: 'T', full: 'Tuesday', height: 85, date: 'Tue, May 6' },
    { id: 3, short: 'W', full: 'Wednesday', height: 120, date: 'Wed, May 7' },
    { id: 4, short: 'Th', full: 'Thursday', height: 50, date: 'Thu, May 8' },
    { id: 5, short: 'F', full: 'Friday', height:70, date: 'Fri, May 9' },
    { id: 6, short: 'S', full: 'Saturday', height: 100, date: 'Sat, May 10' },
  ];

  const learningItemsByDay = {
    0: [ // Sunday
      { id: 1, title: 'HTML', time: '2hrs, 15mins'},
      { id: 2, title: 'CSS', time: '1hr, 32mins'},
      { id: 3, title: 'JAVA', time: '0hrs, 23mins'},
      { id: 4, title: 'REACT NATIVE', time: '0hrs, 0mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hrs, 15mins'},
    ],
    1: [ // Monday
      { id: 1, title: 'HTML', time: '1hrs, 25mins'},
      { id: 2, title: 'CSS', time: '0hrs, 11mins'},
      { id: 3, title: 'JAVA', time: '0hr, 10mins'},
      { id: 4, title: 'REACT NATIVE', time: '0hrs, 15mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hrs, 10mins'},
    ],
    2: [ // Tuesday
      { id: 1, title: 'HTML', time: '2hrs, 30mins'},
      { id: 2, title: 'CSS', time: '1hrs, 15mins'},
      { id: 3, title: 'JAVA', time: '0hrs, 46mins'},
      { id: 4, title: 'REACT NATIVE', time: '0hr, 34mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hrs, 28mins'},
    ],
    3: [ // Wednesday
      { id: 1, title: 'HTML', time: '2hrs, 50mins'},
      { id: 2, title: 'CSS', time: '1hrs, 50mins'},
      { id: 3, title: 'JAVA', time: '1hrs, 15mins'},
      { id: 4, title: 'REACT NATIVE', time: '1hrs, 2mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hr, 30mins'},
    ],
    4: [ // Thursday
      { id: 1, title: 'HTML', time: '1hrs, 20mins'},
      { id: 2, title: 'CSS', time: '0hrs, 25mins'},
      { id: 3, title: 'JAVA', time: '0hr, 50mins'},
      { id: 4, title: 'REACT NATIVE', time: '1hr, 15mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hrs, 10mins'},
    ],
    5: [ // Friday
      { id: 1, title: 'HTML', time: '2hrs, 30mins'},
      { id: 2, title: 'CSS', time: '1hr, 45mins'},
      { id: 3, title: 'JAVA', time: '1hr, 0mins'},
      { id: 4, title: 'REACT NATIVE', time: '0hrs, 45mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '0hrs, 50mins'},
    ],
    6: [ // Saturday
      { id: 1, title: 'HTML', time: '2hr, 12mins'},
      { id: 2, title: 'CSS', time: '1hr, 52mins'},
      { id: 3, title: 'JAVA', time: '1hrs, 45mins'},
      { id: 4, title: 'REACT NATIVE', time: '2hrs, 20mins'},
      { id: 5, title: 'JAVA SCRIPT', time: '1hrs, 48mins'},
    ],
  };

  // Calculate total time spent for the selected day
  const calculateTotalTime = (items) => {
    let totalHours = 0;
    let totalMinutes = 0;
    
    items.forEach(item => {
      const timeString = item.time;
      const hoursMatch = timeString.match(/(\d+)hrs/);
      const minutesMatch = timeString.match(/(\d+)mins/);
      
      if (hoursMatch) totalHours += parseInt(hoursMatch[1]);
      if (minutesMatch) totalMinutes += parseInt(minutesMatch[1]);
    });
    
    // Convert excess minutes to hours
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
    
    return `${totalHours} hrs, ${totalMinutes} mins`;
  };

  // Update learning items when selected day changes
  useEffect(() => {
    const dayItems = [...learningItemsByDay[selectedDay]];
  
    const parseTime = (timeStr) => {
      const hours = parseInt(timeStr.match(/(\d+)hr[s]?/)?.[1] || '0');
      const minutes = parseInt(timeStr.match(/(\d+)min[s]?/)?.[1] || '0');
      return hours * 60 + minutes;
    };
  
    dayItems.sort((a, b) => parseTime(b.time) - parseTime(a.time));
    setCurrentLearningItems(dayItems);
    setTotalDayTime(calculateTotalTime(dayItems));
  }, [selectedDay]);
  

  const renderDayBar = ({ item, index }) => {
    const isSelected = selectedDay === index;
    return (
      <TouchableOpacity
        onPress={() => setSelectedDay(index)}
        style={styles.dayBarContainer}
      >
        <View 
          style={[
            styles.dayBar, 
            { height: item.height },
            isSelected ? styles.selectedDayBar : styles.unselectedDayBar
          ]} 
        />
        <View style={[styles.dayLabelContainer, isSelected ? styles.selectedDayLabelContainer : {}]}>
          <Text style={[styles.dayLabel, isSelected ? styles.selectedDayLabel : {}]}>
            {item.short}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}  
      style={styles.linearGradient}>
        
      {/* Total time */}
      <View style={styles.dateContainer}>
        <Text style={[styles.totalTimeText, {marginTop: 15}]}>{totalDayTime}</Text>
      </View>

      {/* Graph */}
      <View style={styles.chartContainer}>
        <View style={styles.chartContent}>
          {days.map((day, index) => (
            <View key={day.id || index}>
              {renderDayBar({ item: day, index })}
            </View>
          ))}
        </View>
      </View>
      
      {/* Date */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{days[selectedDay].date}</Text>
      </View>
      
      {/* Subjects */}
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={currentLearningItems}
        keyExtractor={item => item.id}
        style={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.learningItemContainer}>
            <View style={styles.learningItemContent}>
              <Text style={styles.learningItemTitle}>{item.title}</Text>
              <Text style={styles.learningItemTime}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  // Graph styles
  chartContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  chartContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    height: 150,
    marginHorizontal: isTablet ? 150 : 0
  },

    // Seven Days
  dayBarContainer: {
    alignItems: 'center',
    width: 50,
  },
  dayBar: {
    width: 35,
    borderRadius: 30,
    marginBottom: 8,
  },
  selectedDayBar: {
    backgroundColor: 'white',
  },
  unselectedDayBar: {
    backgroundColor: '#0F2027',
  },
  dayLabelContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayLabelContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  dayLabel: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'SpaceMono-Regular'
  },
  selectedDayLabel: {
    color: 'black',
  },

  // Date and time spent
  dateContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
    marginTop: -10,
    alignSelf: 'center'
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SpaceMono-Regular'
  },
  totalTimeText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'SpaceMono-Regular'
  },

  // Subjects spent
  listContainer: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 16,
  },
  learningItemContainer: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  learningItemContent: {
    flex: 1,
  },
  learningItemTitle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold'
  },
  learningItemTime: {
    color: '#f5f1e6',
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'SpaceMono-Regular'
  },
});

export default TimeSpentScreen;