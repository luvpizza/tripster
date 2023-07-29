import Button from '@/components/UI/buttons/Button/Button';
import {FC} from 'react';

import s from "./RoomCard.module.scss"

interface RoomCardProps {
    id: number,
    title: string,
    imageURL?: string,
    price: number,
    maxPeople: number,
    services?: string[]
    smoking?: boolean,
}

const RoomCard: FC<RoomCardProps> = ({id,title,imageURL,maxPeople,price, services, smoking}) => {
    return (
        <div className={s.room__card}>
            <div className={s.room__img}>
                {imageURL ? <img src={imageURL} alt="" /> : <div className={s.noimg}>No Image</div>}
            </div>
            <div className={s.room__info}>
                <h3 className={s.room__title}>{title}</h3>
                <div className={s.room__services}>
                    <p className={s.room__service}>{smoking ? "Smoking allowed" : "No smoking"}</p>
                    <p className={s.room__service}>{maxPeople} people</p>
                </div>
            </div>
            <Button buttonType='solid' fullWidth>{`Book now for $${price}`}</Button>
        </div>
    );
};

export default RoomCard;