import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import Rating from '@/components/UI/misc/Rating/Rating';
import {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';

import s from "./HotelPage.module.scss"

// interface HotelProps extends HTMLAttributes < HTMLDivElement > {
//     photos: string[],
//     name: string,
//     location: string,
//     rooms?: Room[],
//     services?: string[] //edit
// }

const HotelPage: FC = () => {

    const hotelNav = [
        {
            title: "Overview",
            id: "#overview"
        },
        {
            title: "Rooms",
            id: "#rooms"
        },
        {
            title: "Reviews",
            id: "#reviews"
        }
    ]
    const [navSelected, setNavSelected] = useState(0)
    const [backModifier, setBackModifier] = useState(0)

    const services = [
            {
                title: "Free Wi-Fi"
            },
            {
                title: "Air conditioning"
            },
            {
                title: "Private bathroom"
            },
            {
                title: "Key card access"
            },
            {
                title: "Free parking"
            },
            {
                title: "24-hour front desk"
            },
    ]


    return (
        <section className={s.hotel}>
            <div className={s.container}>
                <GoBackButton className={s.hotel__back} modifier={backModifier}/>
                <div className={s.hotel__photos__grid}>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                    <div className={s.hotel__photo}>
                        <img src="https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hotel room" />
                    </div>
                </div>
                <div className={s.hotel__description_grid}>
                    <div className={s.grid__item}>
                        <h2 className={s.hotel__name}>Hotel Norrebro</h2>
                        <p className={s.hotel__smdesc}>3-star hotel салем in heart of Copenhagen</p>
                    </div>
                    <Rating className={s.hotel__rating}  type='full' reviewCount={1920} rating={9.3} />
                </div>
                <nav className={s.hotel__navbar}>
                    {hotelNav.map((nav,idx)=>{return <a href={nav.id} className={`${s.hotel__nav} ${(navSelected == idx && s.hotel__nav_active)}`} onClick={()=>{setNavSelected(idx); setBackModifier(prev => prev + 1)}}>{nav.title}</a>})}
                </nav>
                <section className={s.hotel__overview} id="overview">
                    <h3 className={s.overview__title}>Proprety overview</h3>
                    <div className={s.service__grid}>
                        {services && services.map((service,idx)=>{
                            return <li className={s.service__name}>{service.title}</li>
                        })}
                    </div>
                </section>
            </div>
            <section className={s.rooms}>
                <div className={s.container}>
                    <h3 className={s.section__title}>Rooms</h3>
                </div>
            </section>
            <section className={s.reviews}>
                <div className={s.container}>
                    <h3 className={s.section__title}>Reviews</h3>
                </div>
            </section>
        </section>
    );
};

export default HotelPage;