import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro, StartOnboard} from '../pages';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const PreLogin = () => {
  return (
    <Stack.Navigator initialRouteName="StartOnboard">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StartOnboard"
        component={StartOnboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PreLogin;
