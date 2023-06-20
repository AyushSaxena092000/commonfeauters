import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from './common/utils';
import React, {useState, useEffect} from 'react';

const Localization = () => {
  const [selectedLang, setSelectedLang] = useState(0);

  useEffect(() => {
    getLang();
  }, []);
  const getLang = async () => {
    setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}
        onSelectLang={x => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }}>
        {selectedLang == 0
          ? translation[1].English
          : selectedLang == 1
          ? translation[1].Tamil
          : selectedLang == 2
          ? translation[1].Hindi
          : selectedLang == 3
          ? translation[1].Punjabi
          : selectedLang == 4
          ? translation[1].Urdu
          : null}
      </Text>
    </View>
  );
};

export default Localization;
