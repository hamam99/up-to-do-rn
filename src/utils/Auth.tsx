import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const configure = () => {
  console.log('google configure');
  GoogleSignin.configure({
    webClientId:
      '419741298777-p8jl05o0rj53rbhgvshmsobs07kjgevh.apps.googleusercontent.com',
    offlineAccess: true,
  });
};

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

const signInGoogle = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

const getCurrentUser = () => {
  return auth().currentUser;
};

const Auth = {
  configure,
  SignupUsingEmail,
  signInUsingEmail,
  onAuthStateChanged,
  signInGoogle,
  getCurrentUser,
};

export default Auth;
