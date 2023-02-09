import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../utils';
import Header from '../../components/atoms/Header';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/themed';
import GlobalStyles from '../../styles';
import {ButtonCustom, TextInput, TextInputCustom} from '../../components';

const StartOnboard = () => {
  const navigation = useNavigation();

  const FormLogin = () => {
    return (
      <>
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
          containerStyle={{marginTop: 24}}
        />
      </>
    );
  };
  const Divider = () => {
    return (
      <View
        style={{
          marginVertical: 32,
          flexDirection: 'row',
          height: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: Colors.gray2, height: 1, flexGrow: 1}} />
        <Text
          style={{
            color: Colors.gray2,
            marginHorizontal: 4,
            fontSize: 16,
            fontFamily: Fonts.LatoRegular,
          }}>
          or
        </Text>
        <View style={{backgroundColor: Colors.gray2, height: 1, flexGrow: 1}} />
      </View>
    );
  };

  const SocialButton = () => {
    return (
      <>
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
      </>
    );
  };

  const RegisterButton = () => {
    return (
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 16}}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: Fonts.LatoRegular,
            color: Colors.gray2,
          }}>
          Don’t have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              fontFamily: Fonts.LatoRegular,
              color: 'white',
              marginLeft: 4,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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

      <FormLogin />
      <Divider />
      <SocialButton />
      <RegisterButton />
    </View>
  );
};

export default StartOnboard;
