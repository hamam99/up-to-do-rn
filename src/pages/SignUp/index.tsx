import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles';
import {ButtonCustom, Header, TextInputCustom} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../utils';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <Header
        leftIcon={'chevron-left'}
        leftIconOnPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>Register</Text>
      <View style={{marginTop: 24}}>
        <TextInputCustom
          placeholder="Username"
          label={'Username'}
          onChangeText={() => {}}
        />
        <TextInputCustom
          placeholder="Password"
          label={'Password'}
          onChangeText={text => {}}
        />
        <TextInputCustom
          placeholder="Confirm Password"
          label={'Confirm Password'}
          onChangeText={text => {}}
        />
      </View>

      <ButtonCustom
        title={'Register'}
        onPress={() => {}}
        containerStyle={styles.formButton}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: Fonts.LatoBold,
    color: 'white',
    marginTop: 41,
  },
  formButton: {
    marginTop: 24,
  },
});
