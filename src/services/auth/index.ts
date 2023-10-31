/* eslint-disable @typescript-eslint/no-unused-vars */
import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '../../utility/axiosQuery/axiosBaseQuery';
import {LoginRequest} from './interface';
import {Response} from '../../store/interfaces';
import {baseUrl} from '../../utility/baseUrl';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({baseUrl: `${baseUrl}`}),
  endpoints: builder => ({}),
});
export const {} = authApi;
