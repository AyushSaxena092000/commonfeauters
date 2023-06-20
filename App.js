import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import CalendarScreen from './src/CalendarScreen';
import RadioButtonScreen from './src/RadioButtonScreen';
import CheckBoxScreen from './src/CheckBoxScreen';
import SearchBar from './src/SearchBar';
import DropDown from './src/DropDown';
import PhoneNumberPickerScreen from './src/PhoneNumberPicker';
import Language from './src/Language';
import Localization from './src/Localization';
import Rndropdownlibrary from './src/Rndropdownlibrary';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="RadioButtonScreen"
          component={RadioButtonScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CheckBoxScreen"
          component={CheckBoxScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="SearchBar"
          component={SearchBar}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DropDown"
          component={DropDown}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PhoneNumberPickerScreen"
          component={PhoneNumberPickerScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Localization"
          component={Localization}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Rndropdownlibrary"
          component={Rndropdownlibrary}
          options={{
            headerShown: true,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
