import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Updated import path
import { BASE_URL } from "../BASE_URL";

export const hotelApi = createApi({
    reducerPath: 'hotelApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getHotelById: builder.query({ 
            query: (id) => `/CreatHotels/hotelById/${id}`,
        }),
    }),
});

export const { useGetHotelByIdQuery } = hotelApi;
