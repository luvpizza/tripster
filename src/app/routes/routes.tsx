import React from 'react';
import {ROUTE_PATH} from '@/types/other';
import HomePage from '@/pages/HomePage/HomePage';
import HotelPage from '@/pages/HotelPage/HotelPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignupPage from '@/pages/SignupPage/SignupPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import SearchPage from '@/pages/SearchPage/SearchPage';
import HotelManagePage from '@/pages/HotelManagePage/HotelManagePage';
import ReservationPage from '@/pages/ReservationPage/ReservationPage';

type Route = {
    path: string;
    Component: React.FC;
};

export const publicRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.HOME,
        Component: HomePage
    }, {
        path: ROUTE_PATH.HOTEL,
        Component: HotelPage
    },{
        path: ROUTE_PATH.SEARCH,
        Component: SearchPage
    }
];

export const privateRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.PROFILE,
        Component: ProfilePage
    },
    {
        path: ROUTE_PATH.RESERVE,
        Component: ReservationPage,
    }
];

export const authRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.LOGIN,
        Component: LoginPage
    }, {
        path: ROUTE_PATH.SIGNUP,
        Component: SignupPage
    }
];

export const ownerRoutesArr: Route[] =[
    {
        path: ROUTE_PATH.MANAGE,
        Component: HotelManagePage,
    }
]
