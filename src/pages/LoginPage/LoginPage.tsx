import {FC} from 'react';
import { motion } from 'framer-motion';
import LoginForm from '@/components/UI/forms/LoginForm/LoginForm';

import s from "./LoginPage.module.scss"
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
const LoginPage: FC = () => {
    return (
        <section className={s.login}>
            <div className={s.container}>
                <GoBackButton to='/'>To homepage</GoBackButton>
                <div className={s.login__content}>
                <motion.div animate={{ x: 0 }} initial={{x: -40}} transition={{duration: 0.4, type: "spring"}} >
                    <LoginForm className={s.login__form}/>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;