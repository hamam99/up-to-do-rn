import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddTask,
  CalendarTask,
  Focus,
  Home,
  Intro,
  Login,
  Onboard,
  Profile,
  SignUp,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../utils';
import {View, Text, TouchableOpacity, ImageSourcePropType} from 'react-native';
import {Image} from '@rneui/themed';

import homeActive from '../assets/icons/menu-home-active.png';
import homeDeactive from '../assets/icons/menu-home-deactive.png';
import calendarActive from '../assets/icons/menu-calendar-active.png';
import calendarDeactive from '../assets/icons/menu-calendar-deactive.png';
import focusActive from '../assets/icons/menu-focus-active.png';
import focusDeactive from '../assets/icons/menu-focus-deactive.png';
import profileDeactive from '../assets/icons/menu-profile-deactive.png';
import addActive from '../assets/icons/menu-add.png';
import {CustomButtonTabBar, IconTabBar} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: Colors.black2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTabBar
              focused={focused}
              text="Home"
              iconActive={homeActive}
              iconDeactive={homeDeactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarTask}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTabBar
              focused={focused}
              text="Calendar"
              iconActive={calendarActive}
              iconDeactive={calendarDeactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="+"
        component={AddTask}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={addActive} style={{width: 32, height: 32}} />
          ),
          tabBarButton: props => <CustomButtonTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Focus"
        component={Focus}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTabBar
              focused={focused}
              text="Focus"
              iconActive={focusActive}
              iconDeactive={focusDeactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTabBar
              focused={focused}
              text="Profile"
              iconActive={profileDeactive}
              iconDeactive={profileDeactive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
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
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
