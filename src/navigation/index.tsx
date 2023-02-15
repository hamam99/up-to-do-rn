import React, {useEffect, useState} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {Splash} from '../pages';
import {Auth} from '../utils';
import RootNavigation from './RootNavigation';
import NavigationHelper, {navigationRef} from './NavigationHelper';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  function onAuthStateChanged(user) {
    console.log('onAuthStateChanged', {user});
    if (user) {
      // NavigationHelper.navigate('Main');
      // NavigationHelper.dispatch(StackActions.replace('Home'));
    }
    setShowSplash(false);
  }

  useEffect(() => {
    Auth.configure();
    const subscriber = Auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {showSplash && <Splash />}
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
