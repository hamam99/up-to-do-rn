import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Auth, Colors, Fonts, Validation} from '../../utils';
import Header from '../../components/atoms/Header';
import {useNavigation} from '@react-navigation/native';
import GlobalStyles from '../../styles';
import {ButtonCustom, TextInputCustom} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [isLoading, setLoading] = useState(false);

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

    if (emailErrorMessage) {
      return true;
    }

    if (passwordErrorMessage) {
      return true;
    }

    return false;
  };

  const doLogin = () => {
    setLoading(true);
    Auth.signInUsingEmail({email, password})
      .then(response => {
        console.log('Login response', {response});
      })
      .catch(err => {
        console.log('Login error', {err});
        ToastAndroid.show(
          err?.message ?? 'Try again later!',
          ToastAndroid.SHORT,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={GlobalStyles.container}>
      <Header
        leftIcon={'chevron-left'}
        leftIconOnPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <TextInputCustom
          placeholder="Email"
          label={'Email'}
          errorMessage={emailErrorMessage}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <TextInputCustom
          placeholder="Password"
          label={'Password'}
          secureTextEntry={true}
          errorMessage={passwordErrorMessage}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <ButtonCustom
        title={'Login'}
        loading={isLoading}
        containerStyle={styles.formButton}
        disabled={isDisabled()}
        onPress={doLogin}
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
        onPress={() => {
          Auth.signInGoogle()
            .then(() => {
              console.log('login response');
            })
            .catch(err => {
              console.log('login err', {err});
            });
        }}
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

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: Fonts.LatoBold,
    color: 'white',
    marginTop: 41,
  },
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
