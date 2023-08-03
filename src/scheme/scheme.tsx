import {object, ref, string} from 'yup';

export const loginScheme = object({
    email: string()
        .email('E-mail is incorrect')
        .required('Required field'),
    password: string()
        .min(8, 'Password is incorrect (8 characters at least)  ')
        .required('Required field')
});

export const signupScheme = object({
    firstName: string()
        .max(35, 'Field\'s max length is 35 characters')
        .required('Required field'),
    email: string()
        .email('E-mail is incorrect')
        .required('Required field'),
    password: string()
        .min(8, 'Password should be at least 8 characters long')
        .required('Required field'),
    confirmPassword: string().oneOf([ref('password')], 'Passwords should match').required('Required field')
});
