import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker, {Separator} from 'react-native-dropdown-picker';
const rndropdownlibrary = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [open, setOpen] = useState(false);
  const countryList = [
    {label: 'USA', value: 'USA'},
    {label: 'Canada', value: 'Canada'},
    {label: 'India', value: 'India'},
    {label: 'Nepal', value: 'Nepal'},
    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome', parent: 'italy'},
    // Add more countries as needed
  ];

  return (
    <View>
      <DropDownPicker
        open={open}
        items={countryList}
        defaultValue={selectedCountry}
        placeholder="Select a country"
        containerStyle={{height: 40}}
        setOpen={setOpen}
        onChangeItem={item => setSelectedCountry(item.value)}
        renderItem={({item}) => (
          <DropDownPicker.Item label={item.label} value={item.value} />
        )}
        renderSeparator={() => <Separator />}
      />
      
    </View>
  );
};

export default rndropdownlibrary;
