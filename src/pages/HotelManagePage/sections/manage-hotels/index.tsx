import HotelCardManage from '@/components/cards/HotelCardManage/HotelCardManage';
import {FC} from 'react';
import s from "./index.module.scss"

const ManageHotels : FC = () => {
    return (
        <section className={s.manage__hotels}>
            <h1 className={s.section__title}>Hotels Management</h1>
            <p className={s.section__subtitle}>Edit the hotels you own and analyze the statistics</p>
            <div className={s.hotel__cards}>
                <HotelCardManage id={8} imageURL={"https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"} name={"Hyatt Regency"} description={"Bishkek's biggest hotel with luxurious rooms and perfect service."}/>
            </div>
        </section>
    );
};

export default ManageHotels;