export type Reservation = {
    id: number,
    person: number,
    price: number,
    reserveStart: string,
    reserveEnd: string,
    basePerson: number,
    room: ReservationRoom,
    refetch?: ()=>void,
}
export type ReservationRoom = {
    id: number
    basePerson: number,
    hotel: ReservationHotel,
    name: string,
    smoke: boolean,
}
export type ReservationHotel = {
    id: number,
    name: string,
}
