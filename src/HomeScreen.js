import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        style={{alignItems: 'center', backgroundColor: 'skyblue'}}
        onPress={() => {
          navigation.navigate('CalendarScreen');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          Calendar Page
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('RadioButtonScreen');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          Radio Button
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('CheckBoxScreen');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          CheckBox
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('SearchBar');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          SearchBar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('DropDown');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          DropDown
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('PhoneNumberPickerScreen');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          Phone No Country Picker
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('Language');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          Multi-Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'skyblue',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('Rndropdownlibrary');
        }}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '600'}}>
          RN Dropdown Library
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
