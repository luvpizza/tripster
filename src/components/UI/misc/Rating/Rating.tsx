import React, {FC, HTMLAttributes} from 'react';
import s from './Rating.module.scss';

interface RatingProps extends HTMLAttributes < HTMLDivElement > {
    rating: number,
    type: 'full' | 'small',
    reviewCount?: number,
    className?: string,
}

const Rating : FC < RatingProps > = ({
    className,
    rating,
    type,
    reviewCount,
    ...rest
}) => {
    const getRatingText = (rating : number) => {
        if (rating > 7.5) 
            return 'Excellent';
        if (rating > 5) 
            return 'Good';
        return 'Okay';
    };

    return (
        <div
            className={`${type === 'full'
            ? s.rating__full
            : s.rating__small} ${className && className}`}
            {...rest}>
            {type === 'full'
                ? (
                    <div className={s.rating__grid}>
                        <div className={s.rating__desc}>
                            <div
                                className={`${s.rating__grid__title} ${rating >= 8
                                ? s.title__great
                                : rating > 5
                                    ? s.title__ok
                                    : s.title__warn}`}>
                                {getRatingText(rating)}
                            </div>
                            {reviewCount !== undefined && (
                                <div className={s.rating__grid__reviews}>{`${reviewCount} reviews`}</div>
                            )}
                        </div>
                        <div
                            className={`${s.rating} ${rating >= 8
                            ? s.rating__great
                            : rating > 5
                                ? s.rating__ok
                                : s.rating__warn}`}>
                            {rating.toFixed(1)}
                        </div>
                    </div>
                )
                : (
                    <div
                        className={`${s.rating} ${rating >= 8
                        ? s.rating__great
                        : rating > 5
                            ? s.rating__ok
                            : s.rating__warn}`}>
                        {rating.toFixed(1)}
                    </div>

                )}
        </div>
    );
};

export default Rating;
