import useFormattedDate from '@/hooks/useFormattedDate/useFormattedDate';
import {FC, HTMLAttributes, useState} from 'react';
import Rating from '../UI/misc/Rating/Rating';

import s from "./Review.module.scss"

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
    reviewId: number,
    userId: number,
    username: string,
    comment: string,
    rating: number,
    date: string
}


const Review: FC<ReviewProps> = ({className, reviewId, userId, username, comment, rating, date}) => {
    const [hover, setHover] = useState(false)
    const isUserHighlighted = hover ? "var(--blue-primary)" : "#000"
    return (
        <div className={`${s.review} ${className && className}`} data-id={reviewId}>
            <div className={s.review__body}>
                <h3 className={s.review__author} style={{color: isUserHighlighted}}>{username}</h3>
                <div className={s.review__comment} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{comment}</div>
            </div>
            <div className={s.review__info}>
                <Rating type='small' rating={rating}/>
                <p className={s.review__date}>Reviewed on {useFormattedDate("2023-07-15T13:45:30")}</p>
            </div>
        </div>
    );
};

export default Review;