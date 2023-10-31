import {configureStore} from '@reduxjs/toolkit';
import {authApi} from '../services/auth';
import favourites from './favouriteChar';

// import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    favourites: favourites,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
