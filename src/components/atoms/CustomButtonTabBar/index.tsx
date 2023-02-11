import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../utils';
const CustomButtonTabBar = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{top: -30, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: Colors.purple2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonTabBar;
