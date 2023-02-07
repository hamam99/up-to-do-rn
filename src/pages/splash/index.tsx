import {Image} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

import iconApp from '../../assets/icons/ic-app.png';

const Splash = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={iconApp}
        style={{width: 140, height: 180}}
        resizeMode={'center'}
      />
    </View>
  );
};

export default Splash;
