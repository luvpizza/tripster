import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {searchScheme} from '@/scheme/scheme';
import {useFormik} from 'formik';
import {FC} from 'react';
import Button from '../UI/buttons/Button/Button';
import "react-datepicker/dist/react-datepicker.css";

import s from "./Searchbar.module.scss"
import {DatePickerField} from '../DatePickerField/DatePickerField';
import {setSearch} from '@/store/search/slice';
import {useAppDispatch} from '@/hooks/redux/reduxHooks';
import {useNavigate} from 'react-router-dom';
const Searchbar : FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    type OnClickSubmitFn = (values : {
        City: string;
        startDate: Date,
        endDate: Date,
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
        dispatch(setSearch({
            search: {
                City: cityFormatted,
                startDate: utcStartDate,
                endDate: utcEndDate,
                Persons
            }
        }));
        navigate('/search')
    }

    const formik = useFormik({
        initialValues: {
            City: "Almata",
            startDate: new Date(),
            endDate: new Date(),
            Persons: 1
        },
        onSubmit: onClickSubmit,
        validationSchema: searchScheme,
    });

    return (
        <div className={s.searchbar}>
            <form className={s.searchbar__form} onSubmit={formik.handleSubmit}>
                <div className={s.form__item}>
                    <h2 className={s.form__item__title}>City</h2>
                    <input
                        name="City"
                        value={formik.values.City}
                        onChange={formik.handleChange}
                        type={"text"}
                        placeholder={"City"}
                        style={{
                        fontWeight: 300,
                        width: 150
                    }}/>
                </div>
                <div className={s.form__item}>
                    <h2 className={s.form__item__title}>Check-in</h2>
                    <DatePickerField
                        name="startDate"
                        value={formik.values.startDate}
                        onChange={formik.setFieldValue}
                        selectsStart
                        startDate={formik.values.startDate}
                        endDate={formik.values.endDate}/>
                </div>
                <div className={s.form__item}>
                    <h2 className={s.form__item__title}>Check-out</h2>
                    <DatePickerField
                        name="endDate"
                        value={formik.values.endDate}
                        onChange={formik.setFieldValue}
                        selectsEnd
                        startDate={formik.values.startDate}
                        endDate={formik.values.endDate}
                        minDate={formik.values.startDate}/>
                </div>
                <div className={s.form__item}>
                    <h2 className={s.form__item__title}>Guests</h2>
                    <input
                        name="Persons"
                        value={formik.values.Persons}
                        onChange={formik.handleChange}
                        type={"number"}
                        placeholder={"Guests"}
                        style={{
                        fontWeight: 300,
                        width: 100
                    }}/>
                </div>
                <div className={s.form__item}>
                    <Button
                        buttonType='solid'
                        className={s.submit__btn}
                        type="submit"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none">
                            <path
                                d="M9.65016 15.6333L8.82503 16.4585C8.47565 16.8079 7.91069 16.8079 7.56503 16.4585L0.339579 9.23674C-0.00979956 8.88736 -0.00979956 8.32241 0.339579 7.97675L7.56503 0.751292C7.91441 0.401913 8.47937 0.401913 8.82503 0.751292L9.65016 1.57642C10.0033 1.92952 9.99582 2.50562 9.63529 2.85128L5.15655 7.11817H15.8386C16.333 7.11817 16.7307 7.51586 16.7307 8.0102V9.19957C16.7307 9.69391 16.333 10.0916 15.8386 10.0916H5.15655L9.63529 14.3585C9.99953 14.7041 10.007 15.2803 9.65016 15.6333Z"
                                fill="#FFF"
                                transform="rotate(180 8.5 8.5)"/>
                        </svg>
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default Searchbar;