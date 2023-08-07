import {date, number, object, ref, string} from 'yup';

export const loginScheme = object({
    email: string()
        .email('E-mail is incorrect')
        .required('Required field'),
    password: string()
        .min(8, 'Password is incorrect (8 characters at least)  ')
        .required('Required field')
});

export const signupScheme = object({
    fullName: string()
        .max(35, 'Field\'s max length is 35 characters')
        .required('Required field'),
    email: string()
        .email('E-mail is incorrect')
        .required('Required field'),
    password: string()
        .min(8, 'Password should be at least 8 characters long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).+$/,
            'One uppercase, one number and one special character is required.'
        )
        .required('Required field'),
    confirmPassword: string().oneOf([ref('password')], 'Passwords should match').required('Required field')
});

export const searchScheme = object({
    CityId: number()
        .required('Required field'),
    startDate: date()
        .required("Check-in date is required"),
    endDate: date()
        .required("Check-in date is required"),
    Persons: number()
        .required('Enter the number of guests')
})

// export const searchScheme = .object({
//     city: number().required('City ID is required'),
//     checkInDate: Yup.date().required('Check-in date is required'),
//     checkOutDate: Yup.date().required('Check-out date is required'),
//     guests: Yup.number()
//       .integer('Number of guests must be an integer')
//       .min(0, 'Number of guests cannot be negative')
//       .required('Number of guests is required'),
//   });