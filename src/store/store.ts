import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import userReducer from "./user/slice"
import searchReducer from "./search/slice"
import persistStore from "redux-persist/es/persistStore";
import {loginApi} from "@/app/api/auth/login/loginApi";
import {userApi} from "@/app/api/user/userApi";
import {signupApi} from "@/app/api/auth/signup/signupApi";
import {hotelApi} from "@/app/api/hotel/hotelApi";

const rootReducer = combineReducers({
    user: userReducer,
    search: searchReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [signupApi.reducerPath]: signupApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['hotelApi', 'signupApi', 'userApi', 'loginApi']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    REHYDRATE
                ]
        }
        })
        .concat(loginApi.middleware)
        .concat(signupApi.middleware)
        .concat(userApi.middleware)
        .concat(hotelApi.middleware)
})

export type RootState = ReturnType < typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)
export default store