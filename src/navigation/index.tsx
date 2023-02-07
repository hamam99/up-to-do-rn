import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AfterLogin from './AfterLogin';
import PreLogin from './PreLogin';
import {Splash} from '../pages';

const AppNavigation = () => {
  const [isAlreadyLogin, setAlreadyLogin] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 200);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {isAlreadyLogin ? <AfterLogin /> : <PreLogin />}
    </NavigationContainer>
  );
};

export default AppNavigation;
