import {FC, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useFormik} from 'formik'
import {loginScheme} from '@/scheme/scheme';

import s from "./LoginForm.module.scss"
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Input from '../../inputs/Input/Input';
import Button from '../../buttons/Button/Button';
import { useLoginMutation } from '@/app/api/auth/login/loginApi';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch } from '@/hooks/redux/reduxHooks';
import { setUser, setUserRole } from '@/store/user/slice';

interface LoginFormProps {
    className?: string
}

const LoginForm : FC < LoginFormProps > = ({className}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const toast = useToast()

    const [login, { isLoading, error, isSuccess, data }] = useLoginMutation();
    type OnClickSubmitFn = (values : {
        email: string;
        password: string
    }) => void;

    const onClickSubmit : OnClickSubmitFn = async ({email, password}) => {
            login({email, password})
    }

    useEffect(() => {
        if(isSuccess){
            dispatch(setUser({user: data}))
            dispatch(setUserRole({token: data.accessToken}))
            navigate('/')
            toast({status:"success", title:"You successfully logged in!", duration: 2200})
        }
        else if (error && 'status' in error){
            console.log(error)
            toast({status: "error", title: "Error: " + error.status + ".", description: error.data.error, duration: 2200,})
        }}, [isSuccess, error]);
    
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
                <Button buttonType="solid" loading={isLoading} type={"submit"} fullWidth>Log In</Button>
                <Link to="/signup" className={s.to_signup}>Not a member? <span className={s.text_blue}>Sign up</span></Link>
            </form>

        </div>
    );
};

export default LoginForm;