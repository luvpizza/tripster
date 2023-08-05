import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../BASE_URL';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCurrentUser: builder.query({
            query: (token) => ({
                url: '/Auth/getCurrentUser',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        })
    })
});

export const {
    useGetCurrentUserQuery
} = userApi;
