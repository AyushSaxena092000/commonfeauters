import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];
const RadioButtonScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  console.log('ayush',options);
  const handleOptionPress = value => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => handleOptionPress(option.value)}>
          <View
            style={[
              styles.radioButton,
              {
                backgroundColor:
                  selectedOption === option.value ? 'blue' : 'white',
                borderColor: selectedOption === option.value ? 'blue' : 'gray',
              },
            ]}>
            {selectedOption === option.value && (
              <View style={styles.radioButtonInner} />
            )}
          </View>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop:100,
    alignItems:'center'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default RadioButtonScreen;
