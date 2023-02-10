import auth from '@react-native-firebase/auth';

const SignupUsingEmail = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

const Auth = {SignupUsingEmail};

export default Auth;
