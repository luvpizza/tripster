import {useGetAllCitiesQuery} from '@/app/api/geo/geoApi';
import {useCreateHotelMutation, useGetHotelCategoriesQuery, useGetHotelTypesQuery} from '@/app/api/hotel/hotelApi';
import {useGetCurrentUserQuery} from '@/app/api/user/userApi';
import Button from '@/components/UI/buttons/Button/Button';
import {useAppDispatch, useAppSelector} from '@/hooks/redux/reduxHooks';
import {createHotelScheme} from '@/scheme/scheme';
import {selectUserToken} from '@/store/user/selectors';
import {removeUser} from '@/store/user/slice';
import {FormLabel, Input, Select, Textarea} from '@chakra-ui/react';
import {useFormik} from 'formik';
import {FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import s from "./index.module.scss"

const ManageCreateHotel : FC = () => {

    const [createHotel, {
            isSuccess : hotelSuccess,
            error : hotelError,
            isLoading : hotelLoading
        }
    ] = useCreateHotelMutation()
    const token = useAppSelector(selectUserToken)
    const [currentUserId,
        setCurrentUserId] = useState('')
    const {data: currentUser, error: currentUserError} = useGetCurrentUserQuery(token)
    const {data: cities, error: citiesError} = useGetAllCitiesQuery(token)
    const {data: hotelTypes, error: hotelTypesError} = useGetHotelTypesQuery(token)
    const {data: hotelCategories, error: hotelCategoriesError} = useGetHotelCategoriesQuery(token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (currentUserError) {
            dispatch(removeUser)
            navigate('/login')
        }
    }, [currentUserError]);
    useEffect(() => {
        console.log(hotelCategories);
    }, [hotelCategories]);
    useEffect(() => {
        if (currentUser && 'id' in currentUser) {
            setCurrentUserId(currentUser.id)
        }
    }, [currentUser]);
    type OnClickSubmitFn = (values : {
        hotelTypeId: number,
        hotelCategoryId: number,
        name: string,
        description: string,
        cityId: number
    }) => void;

    const onClickSubmit : OnClickSubmitFn = async({hotelTypeId, hotelCategoryId, name, description, cityId}) => {
        console.log({
            hotelTypeId,
            hotelCategoryId,
            name,
            description,
            cityId,
            userId: currentUserId
        });

    }

    const formik = useFormik({
        initialValues: {
            hotelTypeId: 4,
            hotelCategoryId: 0,
            name: "",
            description: "",
            cityId: 1
        },
        validationSchema: createHotelScheme,
        onSubmit: onClickSubmit
    });

    return (
        <section className={s.manage__create}>
            <h1 className={s.section__title}>Create a new hotel</h1>
            <p className={s.section__subtitle}>Add a new hotel and serve the customers</p>
            <form className={s.create_hotel__form} onSubmit={formik.handleSubmit}>
                <div className={s.form__item}>
                    <FormLabel>Select a city</FormLabel>
                    <Select
                        name={"cityId"}
                        value={formik.values.cityId}
                        onChange={formik.handleChange}>
                        {(cities && cities.length)
                            ? cities.map((city : any) => {
                                return <option key={city.id} value={city.id}>{city.name}</option>
                            })
                            : null}
                    </Select>
                </div>
                <div className={s.form__item}>
                    <FormLabel>Enter the name</FormLabel>
                    <Input placeholder='Sheraton Palace'
                    name={"name"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className={s.form__item}>
                    <FormLabel>Select the hotel type</FormLabel>
                    <Select
                        name={"hotelTypeId"}
                        value={formik.values.hotelTypeId}
                        onChange={formik.handleChange}>
                        {(hotelTypes && hotelTypes.length)
                            ? hotelTypes.map((hotelType : any) => {
                                return hotelType.id != 1
                                    ? <option key={hotelType.id} value={hotelType.id}>{hotelType.name}</option>
                                    : false
                            })
                            : null}
                    </Select>
                </div>
                <div className={s.form__item}>
                    <FormLabel>Select the hotel category</FormLabel>
                    <Select
                        name={"hotelCategoryId"}
                        value={formik.values.hotelCategoryId}
                        onChange={formik.handleChange}>
                        {(hotelCategories && hotelCategories.length)
                            ? hotelCategories.map((hotelCategory : any) => {
                                return hotelCategory.id != 1 && <option key={hotelCategory.id} value={hotelCategory.id}>{hotelCategory.name}</option>
                            })
                            : null}
                    </Select>
                </div>
                <div className={s.form__item}></div>
                <div className={s.form__item}></div>
                <div className={s.form__item}>
                    <FormLabel>Enter the description of your hotel</FormLabel>
                    <Textarea
                        name={"description"}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        resize={'none'}
                        height={180}
                        placeholder='The best hotel in the world. Located in the heart of the city, has a pool and a large parking lot.'/>
                </div>
                <Button loading={hotelLoading} type={"submit"} buttonType={"solid"}>Create</Button>
            </form>
        </section>
    );
};

export default ManageCreateHotel;