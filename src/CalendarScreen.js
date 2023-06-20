import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'fr';
const CalendarScreen = () => {
  const [selected, setSelected] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32CD32',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Calender
      </Text>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        style={{
          borderWidth: 1,
          marginTop: 100,
          borderColor: 'gray',
          height: 350,
          width: 350,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#32CD32',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#32CD32',
          dayTextColor: '#2d4150',
          arrowColor: '#2d4150',

         
          // textDisabledColor: '#d9e'
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: '#32CD32',
          },
        }}
      />
    </View>
  );
};

export default CalendarScreen;
