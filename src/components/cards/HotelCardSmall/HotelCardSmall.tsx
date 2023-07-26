import React, { FC } from 'react';

import s from "./HotelCardSmall.module.scss"

interface HotelCardSmallProps  {
    id: number,
    name: string,
    city: string,
    imageURL?: string,
    price: number,
    rating?: number,
}

const HotelCardSmall: React.FC<HotelCardSmallProps> = ({id, name, city, imageURL, price, rating, ...rest}) => {
    const divStyle: React.CSSProperties = {
        background: imageURL ? `url(${imageURL}) center/cover` : 'red',
    };
    return (
        <div className={s.hotel__card} {...rest} >
            <div className={s.hotel__img} style={divStyle}>
            <div className={
                        `${rating === undefined
                            ? s.rating__warn
                            : rating > 7.5
                            ? s.rating__great
                            : rating > 5
                            ? s.rating__ok
                            : s.rating__warn} ${s.rating}`
                    }
                >
                    {rating || "Not Rated Yet"}
                </div>
            </div>
            <div className={s.hotel__info}>
                <p className={s.hotel__name}>{name}</p>
                <p className={s.hotel__city}>{city}</p>
                <p className={s.hotel__price}>from {price}$/night</p>
            </div>
        </div>
    );
};

export default HotelCardSmall;
