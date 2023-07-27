import {FC} from 'react';

import s from "./CityCard.module.scss"

interface CityCardProps {
    name: string,
    imageURL: string,
    className?: string
}

const CityCard : FC < CityCardProps > = ({name, imageURL, className, ...rest}) => {
    const divStyle : React.CSSProperties = {
        background: imageURL
            ? `url(${imageURL}) center/cover`
            : 'grey'
    };
    return (
        <div style={divStyle} className={`${s.city__card} ${className && className}`}>
            <div className={s.city__name}>{name}</div>
        </div>
    );
};

export default CityCard;