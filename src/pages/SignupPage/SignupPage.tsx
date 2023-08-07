import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import SignupForm from '@/components/UI/forms/SignupForm/SignupForm';
import { motion } from 'framer-motion';
import {FC} from 'react';

import s from "./SignupPage.module.scss"
const SignupPage:FC = () => {
    return (
        <section className={s.signup}>
        <div className={s.container}>
            <GoBackButton to='/'>To homepage</GoBackButton>
            <div className={s.signup__content}>
            <motion.div animate={{ x: 0 }} initial={{x: -40}} transition={{duration: 0.4, type: "spring"}} >
                <SignupForm className={s.signup__form}/>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

export default SignupPage;