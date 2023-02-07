import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegisterAndLogin from './RegisterAndLogin';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RegisterAndLogin />
    </NavigationContainer>
  );
};

export default AppNavigation;
