import {NavigatorScreenParams} from '@react-navigation/native';
import {ICharacter} from '../../services/interfaces';

export type TabScreenParam = {
  Main: undefined;
  Favourites: undefined;
};

export type HomeScreenParam = {
  Tab: NavigatorScreenParams<TabScreenParam>;
  CharacterDetailView: {data: ICharacter};
};
