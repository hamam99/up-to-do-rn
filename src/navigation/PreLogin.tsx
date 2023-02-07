import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro} from '../pages';
import {NavigationContainer} from '@react-navigation/native';
// import {Intro} from '../pages';

const Stack = createNativeStackNavigator();

const PreLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PreLogin;
