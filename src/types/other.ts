export enum ROUTE_PATH {
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
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