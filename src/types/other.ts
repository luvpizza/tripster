export enum ROUTE_PATH {
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    HOTEL = '/hotel/:id',
    PROFILE = '/profile',
    NOT_FOUND = '*',
}

export type Room = {
    id: number,
    name: string,
    price: number,
    imageURL: string
}