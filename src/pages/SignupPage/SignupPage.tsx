import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import SignupForm from '@/components/UI/forms/SignupForm/SignupForm';
import {FC} from 'react';

import s from "./SignupPage.module.scss"
const SignupPage:FC = () => {
    return (
        <section className={s.signup}>
        <div className={s.container}>
            <GoBackButton to='/'>To homepage</GoBackButton>
            <div className={s.signup__content}>
                <SignupForm className={s.signup__form}/>
            </div>
        </div>
    </section>
    );
};

export default SignupPage;