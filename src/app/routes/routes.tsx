import React from 'react';
import {HelloWorld, HelloWorld2} from '@/components/test';
import {ROUTE_PATH} from '@/types/other';
import HomePage from '@/pages/HomePage/HomePage';
import HotelPage from '@/pages/HotelPage/HotelPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignupPage from '@/pages/SignupPage/SignupPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

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
    }
];

export const privateRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.PROFILE,
        Component: ProfilePage
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
