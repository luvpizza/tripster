import React, {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../buttons/Button/Button';
import Input from '../../inputs/Input/Input';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { signupScheme } from '@/scheme/scheme';

import { useSignupMutation } from '@/app/api/auth/signup/signupApi';
import { useToast } from '@chakra-ui/react';
import s from "./SignupForm.module.scss"

interface SignupFormProps {
    className?: string
}

    type OnClickSubmitFn = (values : {
        fullName: string,
        email: string,
        password: string,
        confirmPassword: string,
        role: "user" | "owner"
    }) => void;

const SignupForm : FC < SignupFormProps > = ({className, ...rest}) => {
    const navigate = useNavigate()
    const toast = useToast()
    const [signup, {data, isLoading, isSuccess, error}] = useSignupMutation();
    const onClickSubmit : OnClickSubmitFn = ({fullName, email, password, confirmPassword, role}) => {
        signup({email, fullName, password, passwordConfirmation: confirmPassword, role})
    };

    useEffect(() => {
        if(isSuccess){
            navigate('/login')
            toast({status:"success", title:"You successfully signed up!", description:"Now log in using your new credentials", duration: 5800})
        }
        else if (error && 'status' in error){
            console.log(error)
            toast({status: "error", title: "Error: " + error.status, description: error.data.error, duration: 2200,})
        }
    }, [isSuccess, error]);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: "user",
        },
        validationSchema: signupScheme,
        onSubmit: onClickSubmit
    });

    return (
        <div className={`${s.signup__wrapper} ${className && className}`} {...rest}>
            <form className={s.signup__form} onSubmit={formik.handleSubmit}>
                <h3>Sign up as {formik.values.role === "owner" ? <span className={s.text_green}>owner</span> :  formik.values.role === "user" && <span className={s.text_blue}>tourist</span> }</h3>
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
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
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
                            value="user"
                            checked={formik.values.role === "user"}
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
                <Button buttonType="solid" type={"submit"} loading={isLoading} fullWidth>Sign up</Button>
                <Link to="/login" className={s.to_signup}>Have an account? <span className={s.text_blue}>Log In</span></Link>
            </form>
        </div>
    );
};

export default SignupForm;