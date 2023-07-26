import React from 'react';
import {HelloWorld, HelloWorld2} from '@/components/test';
import {ROUTE_PATH} from '@/types/other';

type Route = {
    path: string;
    Component: React.FC;
};

export const publicRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.HOME,
        Component: HelloWorld
    },
    {
        path: ROUTE_PATH.LOGIN,
        Component: HelloWorld
    }
];

export const privateRoutesArr : Route[] = [
    {
        path: ROUTE_PATH.PROFILE,
        Component: HelloWorld2
    }
];
