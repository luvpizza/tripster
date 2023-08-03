import {FC} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik'
import {loginScheme} from '@/scheme/scheme';

import s from "./LoginForm.module.scss"
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Input from '../../inputs/Input/Input';
import Button from '../../buttons/Button/Button';

interface LoginFormProps {
    className?: string
}

const LoginForm : FC < LoginFormProps > = ({className}) => {

    type OnClickSubmitFn = (values : {
        email: string;
        password: string
    }) => void;

    const onClickSubmit : OnClickSubmitFn = ({email, password}) => {
        console.log('Clicked:', email, password); // login logic

    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginScheme,
        onSubmit: onClickSubmit
    });

    return (
        <div className={`${s.login__wrapper} ${className && className}`}>
            <form className={s.login__form} onSubmit={formik.handleSubmit}>
                <h3>Log In</h3>
                <Input
                    icon={< AlternateEmailIcon />}
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    placeholder="Enter your e-mail"/>
                <Input
                    icon={< VpnKeyIcon />}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    type={"password"}
                    placeholder="Enter your password"/>
                <Button buttonType="solid" type={"submit"} fullWidth>Log In</Button>
                <Link to="/signup" className={s.to_signup}>Not a member? <span className={s.text_blue}>Sign up</span></Link>
            </form>

        </div>
    );
};

export default LoginForm;