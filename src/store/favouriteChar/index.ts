import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICharacter} from '../../services/interfaces';
import {RootState} from '..';

type state = {
  favourites: ICharacter[];
};

const initialState: state = {favourites: []};

export const favouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    addToFavourites(state, {payload}: PayloadAction<ICharacter>) {
      const index = state.favourites.findIndex(fv => fv.id == payload.id);
      if (index > -1) {
        return;
      }
      state.favourites.push(payload);
    },
  },
});
export const {addToFavourites} = favouriteSlice.actions;
export default favouriteSlice.reducer;
export const useFavouriteSelector = (state: RootState) => state.favourites;
