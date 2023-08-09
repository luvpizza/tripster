export type ResultHotel = {
    id: number,
    name: string,
    reviewStars: number,
}
export type ResultRoom = {
    id: number,
    name: string,
    price: number,
    smoke: boolean,
}
export type SearchResult = {
    hotel: ResultHotel,
    availableRooms: ResultRoom[]
}