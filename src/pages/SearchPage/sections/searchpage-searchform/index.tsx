import {DatePickerField} from '@/components/DatePickerField/DatePickerField';
import Button from '@/components/UI/buttons/Button/Button';
import Input from '@/components/UI/inputs/Input/Input';
import {useAppDispatch, useAppSelector} from '@/hooks/redux/reduxHooks';
import {searchScheme} from '@/scheme/scheme';
import {selectSearch} from '@/store/search/selectors';
import {setSearch} from '@/store/search/slice';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import PersonIcon from '@mui/icons-material/Person';
import dayjs from 'dayjs';
import {useFormik} from 'formik';
import React, {FC} from 'react';

import s from "./index.module.scss"
const SearchForm : FC = () => {
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(selectSearch)
    type OnClickSubmitFn = (values : {
        City: string;
        startDate: Date | string,
        endDate: Date | string,
        Persons: number
    }) => void;

    const onClickSubmit : OnClickSubmitFn = async({City, startDate, endDate, Persons}) => {
        const utcStartDate = dayjs(startDate)
            .utc(true)
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const utcEndDate = dayjs(endDate)
            .utc(true)
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const cityFormatted = City
            .trim()
            .charAt(0)
            .toUpperCase() + City
            .trim()
            .slice(1)
            .toLowerCase()
        dispatch(setSearch({
            search: {
                City: cityFormatted,
                startDate: utcStartDate,
                endDate: utcEndDate,
                Persons
            }
        }));
    }

    const formik = useFormik({
        initialValues: {
            City: searchQuery
                ?.City || '',
            startDate: searchQuery
                ?.startDate
                    ? dayjs
                        .utc(searchQuery.startDate)
                        .toDate()
                    : new Date(),
            endDate: searchQuery
                ?.endDate
                    ? dayjs
                        .utc(searchQuery.endDate)
                        .toDate()
                    : new Date(),
            Persons: searchQuery
                ?.Persons || 1
        },
        onSubmit: onClickSubmit,
        validationSchema: searchScheme
    });

    return (
        <form className={s.search__form} onSubmit={formik.handleSubmit}>
            <h2 className={s.form__title}>Your search</h2>
            <div className={s.form__item}>
                <p className={s.form__item__title}>Destination</p>
                <Input
                    icon={<ShareLocationIcon/>}
                    placeholder={"Enter the city"}
                    name="City"
                    value={formik.values.City}
                    onChange={formik.handleChange}/>
            </div>
            <div className={s.form__item}>
                <p className={s.form__item__title}>Check-in date</p>
                <Input
                    icon={<EventAvailableIcon/>}
                    >
                    <DatePickerField
                        name="startDate"
                        value={formik.values.startDate}
                        onChange={formik.setFieldValue}
                        selectsStart
                        startDate={formik.values.startDate}
                        endDate={formik.values.endDate}/>
                </Input>
            </div>
            <div className={s.form__item}>
                <p className={s.form__item__title}>Check-out date</p>
                <Input
                    icon={<EventBusyIcon/>}>
                    <DatePickerField
                        name="endDate"
                        value={formik.values.endDate}
                        onChange={formik.setFieldValue}
                        selectsEnd
                        startDate={formik.values.startDate}
                        endDate={formik.values.endDate}
                        minDate={formik.values.startDate}/>
                </Input>
            </div>
            <div className={s.form__item}>
                <p className={s.form__item__title}>Number of guests</p>
                <Input
                    icon={<PersonIcon/>}
                    placeholder={"Enter the guest count"}
                    type="number"
                    name="Persons"
                    value={formik.values.Persons}
                    onChange={formik.handleChange}/>
            </div>
            <Button buttonType={"solid"} type="submit" fullWidth>Search</Button>
        </form>
    );
};

export default SearchForm;