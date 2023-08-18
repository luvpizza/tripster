import {useGetHotelByIdQuery} from '@/app/api/hotel/hotelApi';
import {useAddReservationMutation} from '@/app/api/user/userApi';
import Preloader from '@/components/Preloader/Preloader';
import Button from '@/components/UI/buttons/Button/Button';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import Input from '@/components/UI/inputs/Input/Input';
import Checkmark from '@/components/UI/misc/Checkmark/Checkmark';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import useFormattedDate from '@/hooks/useFormattedDate/useFormattedDate';
import {selectUser, selectUserToken} from '@/store/user/selectors';
import {HotelService} from '@/types/hotel';
import {useToast} from '@chakra-ui/react';
import dayjs from 'dayjs';
import {FC, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

import s from "./ReservationPage.module.scss"

function findRoomNameById(rooms : any, roomId : number) {
    const room : any = rooms.find((room : any) => room.id === roomId);
    return room
        ? room
        : null;
}

function countNights(date1 : string | null, date2 : string | null) {
    return (Math.ceil(Number(dayjs(date1).diff(dayjs(date2), 'hours')) / 24))
}

const ReservationPage : FC = () => {
    const [room,
        setRoom] = useState({id: null, name: null, price: null})
    const location = useLocation()
    const navigate = useNavigate()
    const toast = useToast()
    const user = useAppSelector(selectUser)
    const token = useAppSelector(selectUserToken)
    const queryParams = new URLSearchParams(location.search);
    const roomId = queryParams.get('roomId');
    const person = queryParams.get('person');
    const hotelId = queryParams.get('hotelId');
    const startDate = queryParams.get('startDate');
    const endDate = queryParams.get('endDate');
    const formattedStartDate = useFormattedDate(startDate)
    const formattedEndDate = useFormattedDate(endDate)

    const {data: hotel, isLoading, isFetching, error} = useGetHotelByIdQuery(hotelId)
    const [addReservation, {
            isLoading : reservationLoading,
            error : reservationError,
            isSuccess : isReservationSuccess
        }
    ] = useAddReservationMutation()
    useEffect(() => {
        if (!(roomId && hotelId && dayjs(startDate).isValid() && dayjs(endDate).isValid())) {
            navigate('/search')
            toast({status: 'error', title: 'Wrong reservation parameters.', description: 'Search the fitting room and try again.', isClosable: true, duration: 5800})
        }
    }, [roomId, hotelId, startDate, endDate]);
    useEffect(() => {
        if (hotel) {
            setRoom(findRoomNameById(hotel.rooms, Number(roomId)))
        }
    }, [hotel]);
    useEffect(() => {
        if (!room) {
            navigate('/search')
        }
    }, [room]);
    useEffect(() => {
        if(reservationError) {
            toast({status:"error",title: "Error", description: "You can't book this room."})
        }
    }, [reservationError]);
    return (
        <section className={s.reservation}>
            {isLoading && !hotel && <div className={s.preloader}><Preloader size='xl'/></div>}
            {isReservationSuccess && !reservationLoading && <div className={s.reservation__success}>
                <Checkmark size='xxLarge'/>
                <h2 className={s.success__title}>Your reservation is now confirmed!</h2>
                <h2 className={s.success__subtitle}>See the details in your <Link className={s.link_profile} to={'/profile'}>Profile</Link></h2>
                </div>}
            {hotel && !isLoading && !isFetching && !error && !isReservationSuccess && <div className={s.reservation__grid}>
                <div className={s.reservation__info}>
                    <div className={s.info__section}>
                        <GoBackButton/>
                        <h2 className={s.info__title}>Book {hotel.name}</h2>
                        <h1 className={s.info__step}>Step 1:</h1>
                        <p className={s.services__title}>Property services</p>
                        <div className={s.info__services}>
                            {hotel
                                .services
                                .map((service : HotelService, idx : number) => {
                                    return <li key={idx} className={s.info__service}>{service.hotelService.name}</li>
                                })}
                        </div>
                    </div>
                    <div className={s.info__section}>
                        <h1 className={s.info__step}>Step 2:</h1>
                        <p className={s.input__label}>First and Last name</p>
                        <Input
                            placeholder={"e.g. Ulan Mamedov"}
                            defaultValue={user !.fullName
                            ? user !.fullName
                            : ""}/>
                        <p className={s.input__label}>E-mail address</p>
                        <Input placeholder={"email@email.com"}/>
                        <p className={s.input__label}>Phone number</p>
                        <Input placeholder={"+123 001 234 567"}/>
                    </div>
                    <div className={s.info__section}>
                        <h1 className={s.info__step}>Step 3:</h1>
                        <p className={s.input__label}>Name on card</p>
                        <Input
                            placeholder={"e.g. Ulan Mamedov"}
                            defaultValue={user !.fullName
                            ? user !.fullName
                            : ""}/>
                        <p className={s.input__label}>Card number</p>
                        <Input placeholder={"**** **** ****"} type={"password"}/>
                        <p className={s.input__label}>Valid until</p>
                        <Input placeholder={"MM/YY"}/>
                        <p className={s.input__label}>CVC</p>
                        <Input placeholder={"***"} type={"password"}/>
                    </div>
                </div>
                <div className={s.hotel__info}>
                    {room && room.name && room.price && <div className={s.hotel__card}>
                        <div className={s.hotel__img}>
                            <img
                                src='https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                alt="hotello"/>
                        </div>
                        <h1 className={s.hotel__name}>{hotel.name}</h1>
                        <p className={s.hotel__description}>{hotel.description}</p>
                        <div className={s.hotel__dates}>
                            <div className={s.hotel__date}>
                                <b>Check-in</b>
                                {formattedStartDate}</div>
                            <div className={s.hotel__date}>
                                <b>Check-out</b>
                                {formattedEndDate}</div>
                        </div>
                        <h2 className={s.room__name}>{room.name}</h2>
                        <div className={s.room__prices}>
                            <p className={s.price__key}>Price per night</p>
                            <p className={s.price__value}>{room.price}$</p>
                        </div>
                        <div className={s.room__prices}>
                            <p className={s.price__key}>{`${countNights(endDate, startDate)} nights`}</p>
                            <p className={s.price__value}>{Number(room.price) * Number(countNights(endDate, startDate))}$</p>
                        </div>
                    </div>
}
                    <Button
                        buttonType={"solid"}
                        fullWidth
                        loading={reservationLoading}
                        onClick={() => {
                        addReservation({token, startDate, endDate, person, roomId})
                    }}>Get a reservation</Button>
                </div>
            </div>
}
        </section>
    );
};

export default ReservationPage;