/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../../navigators/dashboard/screens';
import {AppContainer} from '../../components';
import {Header} from '../../components/header';
import colors from '../../utility/colors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {fontPixel, heightPixel, widthPixel} from '../../utility/pxToDpConvert';
import {useDispatch} from 'react-redux';
import {addToFavourites} from '../../store/favouriteChar';

type route = RouteProp<HomeScreenParam, 'CharacterDetailView'>;

const CharacterDetail: React.FC = ({}) => {
  const dispatch = useDispatch();
  const {
    params: {data},
  } = useRoute<route>();

  console.log(data, 'the data');

  const addToFavourite = () => {
    dispatch(addToFavourites(data));
  };

  return (
    <AppContainer backgroundColor={colors.white}>
      <Header title={data?.name} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: data?.image}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.infoBody}>
            <TouchableOpacity
              onPress={addToFavourite}
              style={styles.favouriteButton}>
              <Text style={styles.favText}>Add to Favourites</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.info}>{`Species:  ${data.name}`}</Text>
              <Text style={styles.info}>{`Gender:   ${data.gender}`}</Text>
              <Text style={styles.info}>{`Status:   ${data.status}`}</Text>
              <Text
                style={
                  styles.info
                }>{`Episodes:   ${data.episode.length}`}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    maxHeight: heightPixel(300),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoBody: {
    paddingHorizontal: widthPixel(20),
  },
  favouriteButton: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    width: '70%',
    marginVertical: heightPixel(20),
    alignItems: 'center',
    borderRadius: 8,
  },
  favText: {
    color: colors.white,
    fontSize: fontPixel(17),
    fontWeight: '600',
  },
  info: {
    fontSize: fontPixel(20),
    marginBottom: heightPixel(5),
    lineHeight: fontPixel(26),
    color: colors.black,
  },
});

export default CharacterDetail;
