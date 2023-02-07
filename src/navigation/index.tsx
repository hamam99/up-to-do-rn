import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AfterLogin from './AfterLogin';
import PreLogin from './PreLogin';

const AppNavigation = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <NavigationContainer>
      {isLogin ? <AfterLogin /> : <PreLogin />}
    </NavigationContainer>
  );
};

export default AppNavigation;
