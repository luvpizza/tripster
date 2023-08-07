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
        }),
        getUserFavorites: builder.query({
            query: (token) => ({
                url: '/Favorites/myFavorites',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        }),
        addFavoriteHotel: builder.mutation({
            query: ({token, id}) => ({
                url: '/Favorites',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: id,
            })
        }),
        deleteFavoriteHotel: builder.mutation({
            query: ({token,id}) => ({
                url: `/Favorites/${id}`,
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
        })
    })
})

export const {
    useGetCurrentUserQuery,
    useGetUserFavoritesQuery,
    useAddFavoriteHotelMutation,
    useDeleteFavoriteHotelMutation
} = userApi;
