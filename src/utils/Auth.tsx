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

const signInUsingEmail = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return auth().signInWithEmailAndPassword(email, password);
};

const onAuthStateChanged = (handler: (user: any) => void) => {
  return auth().onAuthStateChanged(handler);
};
const Auth = {SignupUsingEmail, signInUsingEmail, onAuthStateChanged};

export default Auth;
