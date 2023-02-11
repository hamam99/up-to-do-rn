// import {Image} from '@rneui/base';
import React from 'react';
import {ImageSourcePropType, Text, View, Image} from 'react-native';

const IconTabBar = ({
  focused,
  text,
  iconActive,
  iconDeactive,
}: {
  focused: boolean;
  text: string;
  iconActive: ImageSourcePropType;
  iconDeactive: ImageSourcePropType;
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={focused ? iconActive : iconDeactive}
        style={{width: 24, height: 24}}
      />
      <Text style={{color: focused ? 'white' : 'gray'}}>{text}</Text>
    </View>
  );
};

export default IconTabBar;
