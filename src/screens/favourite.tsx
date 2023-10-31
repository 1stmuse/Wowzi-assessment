/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../navigators/dashboard/screens';
import {AppContainer, CharacterCard} from '../components';
import {Header} from '../components/header';
import colors from '../utility/colors';
import {useSelector} from 'react-redux';
import {useFavouriteSelector} from '../store/favouriteChar';
import {fontPixel, widthPixel} from '../utility/pxToDpConvert';

type nav = StackNavigationProp<HomeScreenParam>;

const Favourites: React.FC = ({}) => {
  const {favourites} = useSelector(useFavouriteSelector);
  console.log(favourites);
  return (
    <AppContainer backgroundColor={colors.white}>
      <Header hasBackButton={false} title="Favourites" />
      {!favourites.length ? (
        <View style={styles.emptyList}>
          <Text style={styles.emptyText}>
            You haven't added any favourite character yet!!
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}>
          {favourites.map(fv => (
            <CharacterCard data={fv} grid={false} />
          ))}
        </ScrollView>
      )}
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPixel(20),
    flex: 1,
  },
  content: {
    paddingVertical: 30,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: fontPixel(18),
    width: '80%',
  },
});

export default Favourites;
