import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro, Login, Onboard} from '../pages';

const Stack = createNativeStackNavigator();

const PreLogin = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PreLogin;
