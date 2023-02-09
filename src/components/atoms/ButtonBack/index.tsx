import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';

const ButtonBack = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon name="chevron-left" type="Ionicons" size={32} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonBack;
