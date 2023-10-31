/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreenParam} from './screens';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/main/main';
import BottomTabs from '../tab';
import CharacterDetail from '../../screens/main/CharacterDetail';
const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

const Main = () => {
  return (
    <StackNav
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tab">
      <StackScreen component={BottomTabs} name="Tab" />
      <StackScreen component={CharacterDetail} name="CharacterDetailView" />
    </StackNav>
  );
};

export default Main;
