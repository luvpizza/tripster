import React, {FC, useState, useEffect, SetStateAction} from 'react';
import {useFormik} from 'formik';
import {Textarea, useToast} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import Button from '../../buttons/Button/Button';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import {reviewScheme} from '@/scheme/scheme';
import {selectUser, selectUserToken} from '@/store/user/selectors';
import s from './ReviewForm.module.scss';
import { useAddReviewMutation } from '@/app/api/user/userApi';

interface ReviewFormProps {
    className?: string,
    hotelId : number,
    refetch: ()=>void,
}

const ReviewForm : FC < ReviewFormProps > = ({hotelId, refetch}) => {
    const user = useAppSelector(selectUser);
    const token = useAppSelector(selectUserToken);
    const toast = useToast()
    const [addReview, {isSuccess, error, isLoading}] = useAddReviewMutation()

    const reviewScores = [1,2,3,4,5,6,7,8,9,10];
    const [selectedScore,
        setSelectedScore] = useState(0);

    const handleScoreClick = (score: number) => {
        setSelectedScore(score);
        formik.setFieldValue('stars', score);
    };

    const formik = useFormik({
        initialValues: {
            hotelId,
            stars: selectedScore,
            comment: ''
        },
        validationSchema: reviewScheme,
        onSubmit: ({stars, comment}) => {
            addReview({token, review: {hotelId, stars, comment}})
        }
    });

    useEffect(() => {
        if(isSuccess){
            refetch()
        }
    }, [isSuccess]);
    
    useEffect(() => {
        if(isSuccess){
            toast({status:"success", title:"Review successfully added!", duration: 2200})
        }
        else if (error){
            console.log(error)
            toast({status: "error", title: "An error occured.", duration: 1800,})
        }}
     ,[error, isSuccess]);

    return (
        <form className={s.review__form} onSubmit={formik.handleSubmit}>
            <h1 className={s.form__title}>Leave a review of this hotel</h1>
            {user
                ?.fullName
                    ? ( <> <div className={s.form__header}>
                        <h2>{user.fullName}</h2>
                        <div className={s.score}>
                            {reviewScores.map((score) => (
                                <div
                                    key={score}
                                    onClick={() => handleScoreClick(score)}
                                    className={`${s.score__btn} ${score === selectedScore && s.score__selected}`}>
                                    {score}
                                </div>
                            ))}
                        </div>
                    </div> < div className = {
                        s.form__content
                    } > <Textarea
                        name="comment"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        resize="none"
                        height={170}
                        placeholder="Write a review..."/> 
                        <Button className = {s.submit}
                        loading={isLoading}
                        buttonType = "solid" type = "submit">Submit</Button>
                    </div>
                    </>)
                    : (
                        <div>
                            You are not logged.
                            <Link to="/login">Log in</Link>
                            to continue.
                        </div>
                    )}
        </form>
    );
};

export default ReviewForm;
