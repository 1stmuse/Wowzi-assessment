import {configureStore} from '@reduxjs/toolkit';
import {characterApi} from '../services/characters';
import favourites from './favouriteChar';

// import { characterApi } from './auth/api';

export const store = configureStore({
  reducer: {
    favourites: favourites,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(characterApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
