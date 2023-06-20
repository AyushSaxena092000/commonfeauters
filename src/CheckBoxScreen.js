import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxScreen = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <CheckBox
        value={isChecked}
        onValueChange={handleCheckboxChange}
      />
      <Text>I agree to the terms and conditions</Text>
    </View>
  );
};

export default CheckBoxScreen;
