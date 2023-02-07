import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro} from '../pages';

const Stack = createNativeStackNavigator();

const RegisterAndLogin = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RegisterAndLogin;
