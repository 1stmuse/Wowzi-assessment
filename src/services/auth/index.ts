/* eslint-disable @typescript-eslint/no-unused-vars */
import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '../../utility/axiosQuery/axiosBaseQuery';
import {Response} from '../../store/interfaces';
import {baseUrl} from '../../utility/baseUrl';
import {ICharacter, IMultipleResultsResponse} from '../interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({baseUrl: `${baseUrl}`}),
  endpoints: builder => ({
    getCharaters: builder.query<
      IMultipleResultsResponse<ICharacter>,
      {page: number}
    >({
      query: ({page}) => ({
        url: `character/?page=${page}`,
        method: 'GET',
      }),
    }),
  }),
});
export const {useGetCharatersQuery} = authApi;
