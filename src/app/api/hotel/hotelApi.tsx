import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
import {BASE_URL} from "../BASE_URL";

export const hotelApi = createApi({
    reducerPath: 'hotelApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getHotelById: builder.query({
            query: (id) => `/CreatHotels/hotelById/${id}`
        }),
        searchHotel: builder.query({
            query: ({City, startDate, endDate, Persons}) => ({
                url: '/Filters/Search',
                method: 'GET',
                params: {
                    City,
                    startDate,
                    endDate,
                    Persons
                }
            })
        }),
        getHotelTypes: builder.query({
            query: (token) => ({
                url: `/HotelTypes/GetAll`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
        }),
        getHotelCategories: builder.query({
            query: (token) => ({
                url: `/HotelCategories/GetAll`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
        }),
        createHotel: builder.mutation({
            query: ({
                userId,
                name,
                description,
                isOne,
                checkingAccount,
                filialCount,
                hotelTypeId,
                hotelCategoryId,
                cityId,
                token
            }) => ({
                url: `/CreatHotels/createHotel`,
                method: "POST",
                body: {
                    userId,
                    name,
                    description,
                    isOne,
                    checkingAccount,
                    filialCount,
                    hotelTypeId,
                    hotelCategoryId,
                    cityId,
                    createDate: new Date(),
                }
            })
        })
    })
});

export const {
    useGetHotelByIdQuery,
    useSearchHotelQuery,
    useCreateHotelMutation,
    useGetHotelTypesQuery,
    useGetHotelCategoriesQuery
} = hotelApi;
