/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {headerProps} from './types';
import Feather from 'react-native-vector-icons/Feather';

import {heightPixel, widthPixel} from '../../utility/pxToDpConvert';
import colors from '../../utility/colors';

export const Header = ({
  title,
  hasBackButton = true,
  titleColor,
  leftComponent,
  onBackPress,
  onRightPress,
  rightComponent,
}: headerProps) => {
  const {goBack} = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.white,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBackPress ? onBackPress : goBack}>
        {leftComponent ? (
          leftComponent
        ) : (
          <View>
            {hasBackButton && (
              <View>
                <Feather name="arrow-left" size={24} />
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          {
            color: titleColor ? titleColor : '#000',
            fontWeight: 'bold',
          },
        ]}>
        {title}
      </Text>

      {rightComponent ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onRightPress}>
          {rightComponent}
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: heightPixel(11.5),
    borderBottomColor: colors.grey,
    paddingHorizontal: widthPixel(15),
  },
  title: {
    fontSize: widthPixel(16),
    lineHeight: widthPixel(19),
    color: colors.primary,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 40,
    width: 100,
    // backgroundColor: 'red',
  },
});
