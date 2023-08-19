import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../BASE_URL";

export const geoApi = createApi({
    reducerPath: 'geoApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (token) => ({
                url: "/Cities/GetAll",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
        }),
    })
});

export const {
    useGetAllCitiesQuery,
} = geoApi;
