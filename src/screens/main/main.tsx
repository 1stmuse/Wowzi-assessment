/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../../navigators/dashboard/screens';
import {AppContainer, CharacterCard} from '../../components';
import {useGetCharatersQuery} from '../../services/characters';
import {heightPixel} from '../../utility/pxToDpConvert';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppTextInput} from '../../components/TextInput';
import colors from '../../utility/colors';
import {ICharacter} from '../../services/interfaces';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

type nav = StackNavigationProp<HomeScreenParam>;

const HomeScreen: React.FC = ({}) => {
  const {navigate} = useNavigation<nav>();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [flatlistCol, setFlatlistCol] = useState(1);
  const {data, isLoading} = useGetCharatersQuery({page: page});
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const toggleListStyle = () => {
    if (flatlistCol === 1) {
      setFlatlistCol(2);
    } else {
      setFlatlistCol(1);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (data?.results.length) {
      setCharacters(prev => [...prev, ...data?.results]);
    }
  }, [page]);

  return (
    <AppContainer extraStyle={{paddingHorizontal: 20}} backgroundColor="#fff">
      <View style={styles.filterView}>
        <AppTextInput
          leftIcon={<Feather size={24} name="search" color={colors.grey} />}
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
        />
        <Pressable style={styles.icon} onPress={toggleListStyle}>
          {flatlistCol === 1 ? (
            <Entypo name="menu" size={30} />
          ) : (
            <Feather name="columns" size={30} />
          )}
        </Pressable>
      </View>
      {isLoading ? (
        <View style={styles.emptyList}>
          <ActivityIndicator animating size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          key={flatlistCol}
          numColumns={flatlistCol}
          contentContainerStyle={{paddingVertical: 30}}
          showsVerticalScrollIndicator={false}
          data={characters.filter(ch =>
            ch.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CharacterCard
              onPress={() => navigate('CharacterDetailView', {data: item})}
              data={item}
              grid={flatlistCol === 2 ? true : false}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
        />
      )}
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(20),
  },
  icon: {
    marginLeft: 10,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
