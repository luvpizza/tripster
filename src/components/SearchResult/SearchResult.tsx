import {Collapse, useDisclosure} from '@chakra-ui/react';
import {FC} from 'react';
import {ResultHotel, ResultRoom} from '@/types/search';
import {Link, useNavigate} from 'react-router-dom';
import Rating from '../UI/misc/Rating/Rating';
import Button from '../UI/buttons/Button/Button';

import s from "./SearchResult.module.scss"

interface SearchResultProps {
    hotel : ResultHotel,
    availableRooms : ResultRoom[],
    startDate: string,
    endDate: string,
    person: number,
}

const SearchResult : FC < SearchResultProps > = ({hotel, availableRooms, startDate, endDate, person}) => {
    const {isOpen, onToggle} = useDisclosure()
    const navigate = useNavigate()
    return (
        <div className={s.result}>
            <div className={s.result__header}>
                <div className={s.hotel__info}>

                    <div className={s.hotel__photo}>
                        <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
                            alt="hotel"/>
                    </div>
                    <Link to={`/hotel/${hotel.id}`} className={s.hotel__name}>{hotel.name}</Link>
                </div>
                <div className={s.hotel__right}>
                    <Rating className={s.hotel__rating} rating={hotel.reviewStars} type={"full"}/>
                    <Button buttonType='solid' fullWidth onClick={onToggle}>{isOpen
                            ? "Close"
                            : "See all booking options"}</Button>
                </div>
            </div>
            <Collapse in={isOpen}>
                <div className={s.result__rooms}>
                    {availableRooms !.map((room) => {
                        return <div className={s.result__room}>
                            <h2>{room.name}</h2>
                            <Button buttonType='outlined' onClick={() => {navigate(`/reserve?roomId=${room.id}&hotelId=${hotel.id}&startDate=${startDate}&endDate=${endDate}&person=${person}`)}}>{`Book for\n ${room.price}$/night`}</Button>
                        </div>
                    })}
                </div>
            </Collapse>
        </div>
    );
};

export default SearchResult;