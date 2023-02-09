import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles';
import {ButtonCustom, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '../../utils';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.container}>
      <Header
        leftIcon={'chevron-left'}
        leftIconOnPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Welcome to UpTodo</Text>
        <Text style={styles.subTitle}>
          Please login to your account or create new account to continue
        </Text>
      </View>

      <ButtonCustom
        title={'Login'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <ButtonCustom
        title={'CREATE ACCOUNT'}
        type="outline"
        containerStyle={{
          marginTop: 28,
        }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.LatoBold,
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.LatoRegular,
    color: Colors.white3,
    textAlign: 'center',
    marginTop: 26,
    width: 287,
  },
});
