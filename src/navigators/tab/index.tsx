/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabScreenParam} from '../dashboard/screens';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import colors from '../../utility/colors';
import Favourites from '../../screens/favourite';
import HomeScreen from '../../screens/main/main';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useFavouriteSelector} from '../../store/favouriteChar';

const {Screen, Navigator} = createBottomTabNavigator<TabScreenParam>();

type ScreenOptions = {
  route: RouteProp<TabScreenParam>;
  navigation: NavigationProp<TabScreenParam>;
};

const BottomTabs: React.FC = () => {
  const {favourites} = useSelector(useFavouriteSelector);
  const screenOptions = ({
    route,
  }: ScreenOptions): BottomTabNavigationOptions => {
    return {
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.grey,
      headerShown: false,

      tabBarIcon: ({focused}: {focused: boolean}) => {
        switch (route.name) {
          case 'Main':
            return (
              <MaterialIcons
                color={focused ? colors.primary : colors.grey}
                name="flutter-dash"
                size={30}
              />
            );

          case 'Favourites':
            return (
              <AntDesign
                color={focused ? colors.primary : colors.grey}
                name="heart"
                size={30}
              />
            );
        }
      },
    };
  };

  return (
    <Navigator initialRouteName="Main" screenOptions={screenOptions}>
      <Screen name="Main" component={HomeScreen} />
      <Screen
        name="Favourites"
        options={{
          tabBarBadge: !favourites.length ? undefined : favourites.length,
        }}
        component={Favourites}
      />
    </Navigator>
  );
};

export default BottomTabs;
