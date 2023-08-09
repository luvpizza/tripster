import { ReactNode } from 'react';
export enum ROUTE_PATH {
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    HOTEL = '/hotel/:id',
    PROFILE = '/profile',
    SEARCH = '/search',
    MANAGE = '/manage',
    RESERVE = '/reserve',
    NOT_FOUND = '*',
}

export type Room = {
    id: number,
    name: string,
    price: number,
    imageURL: string
}
export type NavTab = {
    tabId: number,
    icon?: ReactNode,
    title: string,
    section: ReactNode,
}
export type ErrorMsg = {
    status: number,
    data: ErrorData,
}
export type ErrorData = {
    error: string,
}