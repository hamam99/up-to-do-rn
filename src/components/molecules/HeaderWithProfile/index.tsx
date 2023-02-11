import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Header} from '../../atoms';

const HeaderWithProfile = ({title}: {title: string}) => {
  const RightIcon = () => {
    return (
      <FastImage
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
        }}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.center}
      />
    );
  };

  return <Header title={title} customRightIcon={<RightIcon />} />;
};

export default HeaderWithProfile;
