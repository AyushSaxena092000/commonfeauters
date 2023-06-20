import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LanguageModalScreen from '../src/common/LangugaeModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from './common/utils';
import { useNavigation } from '@react-navigation/native';
const Language = () => {
  const navigation = useNavigation();
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + "");
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLangModalVisible(!langModalVisible);
        }}>
        <Text style={styles.language}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        navigation.navigate('Localization')
        }}>
        <Text style={styles.language}>Next Screen</Text>
      </TouchableOpacity>
      <LanguageModalScreen
        langModalVisible={langModalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={x => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 100,
        }}>
        {selectedLang == 0
          ? translation[0].English
          : selectedLang == 1
          ? translation[0].Tamil
          : selectedLang == 2
          ? translation[0].Hindi
          : selectedLang == 3
          ? translation[0].Punjabi
          : selectedLang == 4
          ? translation[0].Urdu
          : null}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 100,
        }}>
        {selectedLang == 0
          ? translation[2].English
          : selectedLang == 1
          ? translation[2].Tamil
          : selectedLang == 2
          ? translation[2].Hindi
          : selectedLang == 3
          ? translation[2].Punjabi
          : selectedLang == 4
          ? translation[2].Urdu
          : null}
      </Text>

    </View>
  );
};

export default Language;
const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: '16%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
  },
  language: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
