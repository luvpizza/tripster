import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

import s from "./HotelCardSmall.module.scss"

interface HotelCardSmallProps {
    id : number,
    name : string,
    city : string,
    imageURL?: string,
    price : number,
    rating?: number
}

const HotelCardSmall : React.FC < HotelCardSmallProps > = ({
    id,
    name,
    city,
    imageURL,
    price,
    rating,
    ...rest
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const divStyle : React.CSSProperties = {
        background: imageURL
            ? `url(${imageURL}) center/cover`
            : 'grey'
    };
    return (
        <div className={s.hotel__card} {...rest}>
            <div className={s.hotel__img} style={divStyle}>
                <div
                    className={`${rating === undefined
                    ? s.rating__warn
                    : rating > 7.5
                        ? s.rating__great
                        : rating > 5
                            ? s.rating__ok
                            : s.rating__warn} ${s.rating}`}>
                    {rating || "Not Rated Yet"}
                </div>
            </div>
            <div className={s.hotel__info}>
                <p className={s.hotel__name}>{name}</p>
                <p className={s.hotel__city}>{city}</p>
                <Link onMouseOver={()=>{setIsHovering(true)}} onMouseLeave={()=>{setIsHovering(false)}} to={`/hotel/${id}`} className={s.hotel__price}>from {price}$/night
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none">
                        <path
                            d="M7.64856 6.26685L2.59258 11.3228C2.34874 11.5667 1.9534 11.5667 1.70959 11.3228L1.11989 10.7331C0.876461 10.4897 0.875993 10.0952 1.11885 9.85116L5.1258 5.82534L1.11885 1.79955C0.875993 1.55555 0.876461 1.16103 1.11989 0.917599L1.70959 0.327903C1.95343 0.0840584 2.34876 0.0840584 2.59258 0.327903L7.64854 5.38386C7.89238 5.62768 7.89238 6.02301 7.64856 6.26685Z"
                            fill={!isHovering ? "#000000" : "#858585"}/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default HotelCardSmall;
