import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash} from '../pages';
import {Auth} from '../utils';
import RootNavigation from './RootNavigation';
import NavigationHelper, {navigationRef} from './NavigationHelper';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 200);
  }, []);

  function onAuthStateChanged(user) {
    console.log('onAuthStateChanged', {user});
    if (user) {
      NavigationHelper.navigate('Home');
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
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
