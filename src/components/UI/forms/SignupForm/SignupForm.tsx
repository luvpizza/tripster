import {useFormik} from 'formik';
import React, {FC} from 'react';
import Button from '../../buttons/Button/Button';
import Input from '../../inputs/Input/Input';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import s from "./SignupForm.module.scss"
import { Link } from 'react-router-dom';
import { signupScheme } from '@/scheme/scheme';

interface SignupFormProps {
    className?: string
}

const SignupForm : FC < SignupFormProps > = ({className, ...rest}) => {

    type OnClickSubmitFn = (values : {
        firstName: string,
        email: string,
        password: string,
        confirmPassword: string,
        role: "default" | "owner"
    }) => void;

    const onClickSubmit : OnClickSubmitFn = ({firstName, email, password, confirmPassword, role}) => {
        console.log({email, firstName, password, confirmPassword, role}); // signup login
        role === "default"
            ? console.log("reg => tourist")
            : role === "owner" && console.log("reg => owner");;

    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: "default"
        },
        validationSchema: signupScheme,
        onSubmit: onClickSubmit
    });

    return (
        <div className={`${s.signup__wrapper} ${className && className}`}>
            <form className={s.signup__form} onSubmit={formik.handleSubmit}>
                <h3>Sign up as {formik.values.role === "owner" ? <span className={s.text_green}>owner</span> :  formik.values.role === "default" && <span className={s.text_blue}>tourist</span> }</h3>
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
                    icon={< AccountCircleIcon />}
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    type={"text"}
                    placeholder="Enter your name"/>
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
                <Input
                    icon={< VpnKeyIcon />}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    type={"password"}
                    placeholder="Enter your password again"/>
                    <div className={s.signup__radios}>
                    <label className={s.signup__radiobutton}>
                        <input
                            type="radio"
                            name="role"
                            value="default"
                            checked={formik.values.role === "default"}
                            onChange={formik.handleChange}
                        />
                        I'm a <span className={s.text_blue}>tourist</span>
                    </label>
                    <label className={s.signup__radiobutton}>
                        <input
                            type="radio"
                            name="role"
                            value="owner"
                            checked={formik.values.role === "owner"}
                            onChange={formik.handleChange}
                        />
                        I'm a <span className={s.text_green}>hotel owner</span>
                    </label>
                </div>
                <Button buttonType="solid" type={"submit"} fullWidth>Sign up</Button>
                <Link to="/login" className={s.to_signup}>Have an account? <span className={s.text_blue}>Log In</span></Link>
            </form>
        </div>
    );
};

export default SignupForm;