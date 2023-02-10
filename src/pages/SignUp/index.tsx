import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';

import GlobalStyles from '../../styles';
import {ButtonCustom, Header, TextInputCustom} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Auth, Fonts, Validation} from '../../utils';

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [
    passwordConfirmationErrorMessage,
    setPasswordConfirmationErrorMessage,
  ] = useState('');

  const [isLoading, setLoading] = useState(false);

  const registerAccount = () => {
    setLoading(true);
    Auth.SignupUsingEmail({email, password})
      .then(response => {
        console.log('register', response);

        navigation.dispatch(StackActions.replace('Login'));
        setLoading(false);
        ToastAndroid.show('Login using registered account', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log('register', err?.message);

        ToastAndroid.show(err?.message, ToastAndroid.SHORT);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isDisabled = () => {
    if (!email) {
      return true;
    }

    if (!Validation.email(email)) {
      return true;
    }

    if (!password) {
      return true;
    }

    if (password.length < 6) {
      return true;
    }

    if (!passwordConfirmation) {
      return true;
    }

    if (passwordConfirmation.length < 6) {
      return true;
    }

    if (password !== passwordConfirmation) {
      return true;
    }

    if (emailErrorMessage) {
      return true;
    }

    if (passwordErrorMessage) {
      return true;
    }

    if (passwordConfirmationErrorMessage) {
      return true;
    }

    return false;
  };

  return (
    <View style={GlobalStyles.container}>
      <Header
        leftIcon={'chevron-left'}
        leftIconOnPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>Register</Text>

      <KeyboardAvoidingView style={{marginTop: 24}}>
        <TextInputCustom
          placeholder="Email"
          label={'Email'}
          inputMode={'email'}
          errorMessage={emailErrorMessage}
          onChangeText={text => {
            setEmail(text);
            setEmailErrorMessage('');
          }}
        />
        <TextInputCustom
          placeholder="Password"
          label={'Password'}
          secureTextEntry={true}
          errorMessage={passwordErrorMessage}
          onChangeText={text => {
            setPassword(text);
            setPasswordErrorMessage('');
          }}
        />
        <TextInputCustom
          placeholder="Confirm Password"
          label={'Confirm Password'}
          secureTextEntry={true}
          errorMessage={passwordConfirmationErrorMessage}
          onChangeText={text => {
            setPasswordConfirmation(text);
            setPasswordConfirmationErrorMessage('');
          }}
        />
      </KeyboardAvoidingView>

      <ButtonCustom
        loading={isLoading}
        disabled={isDisabled()}
        title={'Register'}
        containerStyle={styles.formButton}
        onPress={registerAccount}
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
