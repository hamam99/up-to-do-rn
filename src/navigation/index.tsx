import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash} from '../pages';
import {Auth} from '../utils';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './RootNavigation';

const AppNavigation = () => {
  const [isAlreadyLogin, setAlreadyLogin] = useState(false);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 200);
  }, []);

  function onAuthStateChanged(user) {
    if (user) {
      setAlreadyLogin(true);
    } else {
      setAlreadyLogin(false);
    }

    setShowSplash(false);
  }

  useEffect(() => {
    const subscriber = Auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
