import {FC} from 'react';
import LoginForm from '@/components/UI/forms/LoginForm/LoginForm';

import s from "./LoginPage.module.scss"
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
const LoginPage: FC = () => {
    return (
        <section className={s.login}>
            <div className={s.container}>
                <GoBackButton to='/'>To homepage</GoBackButton>
                <div className={s.login__content}>
                    <LoginForm className={s.login__form}/>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;