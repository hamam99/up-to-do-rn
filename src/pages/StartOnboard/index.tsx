import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../utils';
import Header from '../../components/atoms/Header';
import {useNavigation} from '@react-navigation/native';
import GlobalStyles from '../../styles';
import {ButtonCustom, TextInputCustom} from '../../components';

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
      <View style={styles.formContainer}>
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
      </View>
      <ButtonCustom
        title={'Login'}
        onPress={() => {}}
        containerStyle={styles.formButton}
      />

      <View style={styles.dividerWrapper}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* SOCIAL BUTTON */}
      <ButtonCustom
        title={'Login With Google'}
        type={'outline'}
        icon={{
          name: 'google',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        onPress={() => {}}
      />

      <ButtonCustom
        title={'Login With Apple'}
        type={'outline'}
        icon={{
          name: 'apple',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        containerStyle={{
          marginTop: 20,
        }}
        onPress={() => {}}
      />

      {/* REGISTER BUTTON */}
      <View style={styles.registerWrapper}>
        <Text style={styles.registerAccount}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartOnboard;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 40,
  },
  formButton: {
    marginTop: 24,
  },
  dividerWrapper: {
    marginVertical: 32,
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLine: {
    backgroundColor: Colors.gray2,
    height: 1,
    flexGrow: 1,
  },
  dividerText: {
    color: Colors.gray2,
    marginHorizontal: 4,
    fontSize: 16,
    fontFamily: Fonts.LatoRegular,
  },
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerAccount: {
    fontSize: 12,
    fontFamily: Fonts.LatoRegular,
    color: Colors.gray2,
  },
  registerButton: {
    fontSize: 12,
    fontFamily: Fonts.LatoRegular,
    color: 'white',
    marginLeft: 4,
  },
});
