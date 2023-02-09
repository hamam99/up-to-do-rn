import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro, Login} from '../pages';
import {NavigationContainer} from '@react-navigation/native';

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
    </Stack.Navigator>
  );
};

export default PreLogin;
