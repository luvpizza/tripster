import {useDeleteFavoriteHotelMutation, useGetUserFavoritesQuery} from '@/app/api/user/userApi';
import NotFound from '@/components/NotFound/NotFound';
import Preloader from '@/components/Preloader/Preloader';
import Rating from '@/components/UI/misc/Rating/Rating';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import {selectUserToken} from '@/store/user/selectors';
import { useToast } from '@chakra-ui/react';
import React, {FC, useEffect} from 'react';
import { Link } from 'react-router-dom';

import s from "./index.module.scss"
const ProfileFavorites : FC = () => {
    const token = useAppSelector(selectUserToken)
    const toast = useToast()
    const {data: favorites, isLoading, isFetching, error, refetch} = useGetUserFavoritesQuery(token, {refetchOnMountOrArgChange: true})
    const [deleteUserFavoriteHotel, {error: deleteFavError, isSuccess: deleteFavIsSuccess}] = useDeleteFavoriteHotelMutation()
    useEffect(() => {
        if(deleteFavIsSuccess){
            toast({status:"success", title:"Favorite hotel is successfully deleted.", duration: 2200})
        }
        else if (deleteFavError && 'status' in deleteFavError){
            console.log(error)
            toast({status: "error", title: "Something went wrong.", description: "Reload the page and try again", duration: 2200})
        }
        refetch()
    }, [deleteFavError, deleteFavIsSuccess]);
    return (
        <section className={s.profile__favorites}>
            <h1 className={s.section__title}>Favorite hotels</h1>
            <p className={s.section__subtitle}>See the hotels you saved</p>
            {isLoading && !error && <div className={s.favorites__preloader}><Preloader size="xl"/></div>}
            {!isLoading && !isFetching && !favorites.length && <div className={s.favoites__not_found}><NotFound/></div>}
            {!isLoading && favorites && 
                <div className={s.favorites__list}>
                    {favorites.map((favorite: any)=>
                    <div className={s.favorite__container}>
                        <Link to={`/hotel/${favorite.hotel.id}` }className={s.favorite}>
                        <h2 className={s.favorite__title}>
                            {favorite.hotel.name}
                            <Rating type="small" rating={favorite.hotel.reviewStars}/>
                        </h2>
                        <p className={s.favorite__ctv}>(click to view)</p>
                        </Link>
                        <button className={s.favorite__btn_delete} onClick={()=>{
                            deleteUserFavoriteHotel({token, id: favorite.id})
                        }}>X</button>
                    </div>)}
                </div>}
        </section>
    );
};

export default ProfileFavorites;