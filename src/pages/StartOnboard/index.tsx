import {View, Text} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../utils';
import Header from '../../components/atoms/Header';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/themed';
import GlobalStyles from '../../styles';
import {ButtonCustom, TextInput, TextInputCustom} from '../../components';

const StartOnboard = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.container}>
      <Header
        leftIcon={'chevron-left'}
        leftIconOnPress={() => {
          navigation.goBack();
        }}
      />
      <Text
        style={{
          fontSize: 32,
          fontFamily: Fonts.LatoBold,
          color: 'white',
          marginTop: 41,
        }}>
        Login
      </Text>

      <View style={{marginTop: 40}}>
        <TextInputCustom
          placeholder="Username"
          label={'Username'}
          onChangeText={text => {}}
        />
        <TextInputCustom
          placeholder="Password"
          label={'Password'}
          onChangeText={text => {}}
        />
      </View>
      <ButtonCustom
        title={'Login'}
        onPress={() => {}}
        containerStyle={{marginTop: 48}}
      />
    </View>
  );
};

export default StartOnboard;
