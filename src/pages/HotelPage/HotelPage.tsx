import {FC, useEffect, useState} from 'react';
import RoomCard from '@/components/cards/RoomCard/RoomCard';
import Review from '@/components/Review/Review';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import Rating from '@/components/UI/misc/Rating/Rating';

import s from "./HotelPage.module.scss"
import { useGetHotelByIdQuery } from '@/app/api/hotel/hotelApi';
import usePathnameId from '@/hooks/usePathnameId/usePathnameId';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Preloader from '@/components/Preloader/Preloader';
import NotFound from '@/components/NotFound/NotFound';
import { useAddFavoriteHotelMutation } from '@/app/api/user/userApi';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux/reduxHooks';
import { selectUser, selectUserToken } from '@/store/user/selectors';
import ReviewForm from '@/components/UI/forms/ReviewForm/ReviewForm';

const HotelPage: FC = () => {
    const id = usePathnameId()
    const {data: hotel, isLoading, isFetching, error, refetch} = useGetHotelByIdQuery(id, {refetchOnMountOrArgChange: true, refetchOnReconnect: true})
    const [addFavoriteHotel, {isLoading: isFavLoading, error: favError, isSuccess: isFavSuccess, data: favData}] = useAddFavoriteHotelMutation()

    const hotelNav = [
        {
            title: "Overview",
            id: "#overview"
        },
        {
            title: "Rooms",
            id: "#rooms"
        },
        {
            title: "Reviews",
            id: "#reviews"
        }
    ]
    const toast = useToast()
    const navigate = useNavigate()
    const user = useAppSelector(selectUser);
    const token = useAppSelector(selectUserToken)
    const [navSelected, setNavSelected] = useState(0)
    const [backModifier, setBackModifier] = useState(0)

    const handleAddFavorites = (id: number) => {
        if(user){
            addFavoriteHotel({token, id})
        } else {
            navigate('/login')
            toast({status:"error", title:"You are unauthorized to perform this action.", description: "Please log in and try again.", duration:3200})
        }
    }

    useEffect(() => {
        if(isFavSuccess){
            toast({status:"success", title:"Favorite successfully added!", duration: 2200})
        }
        else if (favError){
            console.log(favError)
            toast({status: "error", title: favError.data.error, duration: 1800,})
        }}
     ,[favError, isFavSuccess]);

    return (
        <section className={s.hotel}>
            {isLoading && !error && <div className={s.hotel__preloader}><Preloader size="xl"/></div>}
            {!isLoading && !isFetching && !hotel && <div className={s.hotel__not_found}><NotFound/></div>}
            {(hotel && !isLoading && !error ) &&
            <div className={s.hotel__data}>
            <div className={s.container}>
                <GoBackButton className={s.hotel__back} modifier={backModifier}/>
                <div className={s.hotel__photos__grid}>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1692576000&Signature=o526qRT3UgbhIKfZ4aKcbw222P5y2t63PUe0vUS9Xo41N2SjQctjvAEjt06i1LQSElc1Tm2KRtqveG22Q--i333GjrCpOoPNj73HzAqjie-7HTKf1tpjS90Ed8XO5O-tHq~pDcUcVkfDw7ECRUMMZyKd5NXxrTNGNufY7IZyI7mpuMzW1wPsq6gNuxPjmZIAiF5s9NXyAVFl6CXkpvTnbQiOUzs1RaDEl1N0VwxmywD046MIAEX6T8D8Fq~MxCOB1itnusur5xJ2Nc6FTXFg4~n9auWsxRGoyLprxPENJM0gvg47WuYYAjGdrLgdde7W5tdZ0wHms-AWZMiO0ktmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                </div>
                <div className={s.hotel__description_grid}>
                    <div className={s.grid__item}>
                        <h2 className={s.hotel__name}>{hotel.name} <span className={s.to_favorites} onClick={()=>{handleAddFavorites(hotel.id)}}>Add to favorites</span></h2>
                        <p className={s.hotel__smdesc}>{hotel.description}</p>
                    </div>
                    <Rating className={s.hotel__rating}  type='full' reviewCount={hotel.clientReviews.length} rating={hotel.reviewStars} />
                </div>
                <nav className={s.hotel__navbar}>
                    {hotelNav.map((nav,idx)=>{return <a href={nav.id} key={idx} className={`${s.hotel__nav} ${(navSelected == idx && s.hotel__nav_active)}`} onClick={()=>{setNavSelected(idx); setBackModifier(prev => prev + 1)}}>{nav.title}</a>})}
                </nav>
                <section className={s.hotel__overview} id="overview">
                    <h3 className={s.overview__title}>Proprety overview</h3>
                    <div className={s.service__grid}>
                        {hotel.services && hotel.services.map((service: any, idx: number)=>{
                            return <li key={idx} className={s.service__name}>{service.hotelService.name}</li>
                        })}
                    </div>
                </section>
            </div>
            <section className={s.rooms} id="rooms">
                <div className={s.container}>
                    <h3 className={s.section__title}>Rooms</h3>
                    <div className={s.rooms__grid}>
                        {hotel.rooms && hotel.rooms.length ? hotel.rooms.map((room: any)=>{
                            return <RoomCard key={room.id} smoking={room.smoking} id={room.id} title={room.name} price={room.price} maxPeople={room.basePerson} imageURL={room.imageURL}/> 
                        }) : "Rooms not found"}
                    </div>
                </div>
            </section>
            <section className={s.reviews} id="reviews">
                <div className={s.container}>
                    <h3 className={s.section__title}>Reviews</h3>
                    <div className={s.reviews__grid}>
                        <div className={s.rating__total}>
                            <p className={s.rating__title}>Average rating</p>
                            <h4 className={s.rating}>{hotel.clientReviews.length ? hotel.reviewStars : "Not rated"}</h4>
                        </div>
                        <div className={s.hotel__reviews}>
                            {user && <ReviewForm hotelId={hotel.id} refetch={refetch}/>}
                            {hotel.clientReviews.length ? hotel.clientReviews.map((review: any)=>{
                                return <Review username={review.user.fullName} reviewId={review.id} userId={review.user.id} comment={review.comment} rating={review.stars} date={review.createdDate}/>
                            }) : <div>Отзывов не найдено</div>}
                        </div>
                    </div>
                </div>
            </section>
            </div>}
        </section>
    );
};

export default HotelPage;