import dayjs, {Dayjs} from 'dayjs';
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
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).+$/, 'One uppercase, one number and one special character is required.')
        .required('Required field'),
    confirmPassword: string().oneOf([ref('password')], 'Passwords should match').required('Required field')
});

export const searchScheme = object({
    City: string()
        .trim()
        .required('City is required'),
    startDate: date().required('Start date is required'),
    endDate: date().test('check-out-later-than-check-in', 'Check-out day must be equal to or later than check-in day', function (value) {
        const startDate : string = this.resolve(ref('startDate'))
        const startDay : Dayjs = dayjs(startDate).startOf('day')
        const endDay = dayjs(value).startOf('day');
        return endDay.isSame(startDay) || endDay.isAfter(startDay)
    }).required('End date is required'),
    Persons: number()
        .min(1, 'Number of guests must be at least 1')
        .required('Number of guests is required')
});

export const reviewScheme = object({
    stars: number()
        .required('Review score is required')
        .min(1)
        .max(10),
    comment: string().required('Comment is required')
})

export const createHotelScheme = object({
    hotelTypeId: number().required('Required field'),
    hotelCategoryId: number().required('Required field'),
    name: string().required('Required field'),
    description: string().required('Required field'),
    cityId: number().required('Required field')
});