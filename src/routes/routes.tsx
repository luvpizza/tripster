import React from 'react';
import {HelloWorld, HelloWorld2} from '@/components/test';
import {ROUTE_PATH} from '@/types/other';
import HomePage from '@/pages/HomePage/HomePage';
import HotelPage from '@/pages/HotelPage/HotelPage';

type Route = {
    path: string;
    Component: React.FC;
};

export const publicRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.HOME,
        Component: HomePage
    },
    {
        path: ROUTE_PATH.LOGIN,
        Component: HelloWorld
    },
    {
        path: ROUTE_PATH.HOTEL,
        Component: HotelPage
    }
];

export const privateRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.PROFILE,
        Component: HelloWorld2
    }
];
