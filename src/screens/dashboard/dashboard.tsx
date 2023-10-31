/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../../navigators/dashboard/screens';
import {AppContainer} from '../../components';

type nav = StackNavigationProp<HomeScreenParam>;

const HomeScreen: React.FC = ({}) => {
  console.log('goot here');
  return (
    <AppContainer>
      <Text>hgdh</Text>
    </AppContainer>
  );
};

export default HomeScreen;
