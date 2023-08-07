import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../BASE_URL';

export const signupApi = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: ({email, password, passwordConfirmation, fullName, role}) => ({
                url: role === "owner" ? '/Owner/register' : '/Auth/register',
                method: 'POST',
                headers:{
                    'Content-Type': "application/json",
                },
                body: {
                    email,
                    password,
                    fullName,
                    passwordConfirmation,
                }
            })
        })
    })
});

export const {
    useSignupMutation
} = signupApi;