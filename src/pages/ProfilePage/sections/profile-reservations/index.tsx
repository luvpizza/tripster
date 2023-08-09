import {FC, useEffect} from 'react';
import s from "./index.module.scss"
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import {selectUserToken} from '@/store/user/selectors';
import {useToast} from '@chakra-ui/react';
import {useCancelReservationMutation, useGetUserReservationsQuery} from '@/app/api/user/userApi';
import ReservationCard from '@/components/cards/ReservationCard/ReservationCard';
import Preloader from '@/components/Preloader/Preloader';
import NotFound from '@/components/NotFound/NotFound';
import { Reservation } from '@/types/reservation';

const ProfileReservations : FC = () => {
    const token = useAppSelector(selectUserToken)
    const toast = useToast()
    const {data: reservations, isLoading, isFetching, error, refetch} = useGetUserReservationsQuery(token, {refetchOnMountOrArgChange: true})
    const [cancelReservation, {error: cancelError, isSuccess: isCancelSuccess}] = useCancelReservationMutation()
    const handleReservationCancel = (id: number)=>{
        cancelReservation({token, id})
    }
    useEffect(() => {
        if(isCancelSuccess){
            toast({status:"success", title:"Reservation is successfully cancelled.", duration: 2200})
        }
        else if (cancelError){
            console.log(error)
            toast({status: "error", title: "Something went wrong.", description: "Reload the page and try again", duration: 2200})
        }
        
    }, [cancelError, isCancelSuccess]);
    return (
        <section className={s.profile__reservations}>
            <h1 className={s.section__title}>Room reservations</h1>
            <p className={s.section__subtitle}>See the reservations you made</p>
            {isLoading && !error && <div className={s.preloader}><Preloader size="xl"/></div>}
            {!isLoading && !isFetching && (reservations.length < 1) && <div className={s.not_found}><NotFound/></div>}
            {reservations && reservations.length && <div className={s.reservations__list}>
                {reservations.map((reservation: Reservation)=>{
                    return <ReservationCard
                    id={reservation.id}
                    price={reservation.price}
                    hotelName={reservation.room.hotel.name}
                    hotelId={reservation.room.hotel.id}
                    roomId={reservation.room.id}
                    roomName={reservation.room.name}
                    reserveStart={reservation.reserveStart}
                    reserveEnd={reservation.reserveEnd}
                    smoke={reservation.room.smoke}
                    guests={reservation.person}
                    maxGuests={reservation.room.basePerson}
                    refetch={refetch}
                    handleCancel={()=>{handleReservationCancel(reservation.id)}}
                    />
                })}
            </div>
            }
        </section>
    );
};

export default ProfileReservations;