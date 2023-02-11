import React from 'react';
import {View, Text} from 'react-native';
import {HeaderWithProfile} from '../../components';
import GlobalStyles from '../../styles';

const Home = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <HeaderWithProfile title="Home" />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
