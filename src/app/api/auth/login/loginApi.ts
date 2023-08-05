import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../BASE_QUERY';
import {BASE_URL} from '../../BASE_URL';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: '/Auth/login',
                method: 'POST',
                headers:{
                    'Content-Type': "application/json",
                },
                body: {
                    email,
                    password
                }
            })
        })
    })
});

export const {
    useLoginMutation
} = loginApi;