import {FC, useState} from 'react';
import RoomCard from '@/components/cards/RoomCard/RoomCard';
import Review from '@/components/Review/Review';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import Rating from '@/components/UI/misc/Rating/Rating';

import s from "./HotelPage.module.scss"

// interface HotelProps extends HTMLAttributes < HTMLDivElement > {
//     photos: string[],
//     name: string,
//     location: string,
//     rooms?: Room[],
//     services?: string[] //edit
// }

// needs review pagination

const HotelPage: FC = () => {

    const rating = 9.6
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
    const rooms = [
        {
            id: 1,
            title: "Double standart room",
            smoking: true,
            maxPeople: 2,
            imageURL: "https://s3-alpha-sig.figma.com/img/b6ef/e3cc/c880001185f5520d5ddef939be5a08ac?Expires=1691366400&Signature=AJ33n-auyGMBNBCHXMjTYq-ZwiSf5KVdUDNndDZdemZytp0JuxolWClzL~OZbDfE-PrHT2V6~yNFL5wHg-Nddfkpk7rlsMsGe99ckyliD2bd7GtTjS1XmirpXSt4U6Mk7PSnKYXLx8C2Dtpdx90T5xMWCbVN77p9tIWJ5lNSjm95bJLok0RyMMvdLazrqJfNHEwoqM5rmv4lf4bNIrs0XMWoaTvH1U15BhtGeza5g9usikE3dbz3hHrEXjaLfnYScJWbmjU86cXdzCEtpYB9Zr-ilsMx01K~5YoP3I4QM1sOpn409Huu-br09qBLWY7jDZinsxG-Oz5urXRpAgtN3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 180
        },
        {
            id: 2,
            title: "Comfort single room",
            smoking: true,
            maxPeople: 2,
            imageURL: "https://s3-alpha-sig.figma.com/img/8da4/54ec/c27c3caf42f097b086eeeebcf10d8291?Expires=1691366400&Signature=DT9dcL0G0zT2QDfAwaiwwqLCs6sWl9RuAmiBfA-EjmHXYkCqLpNe~d1XcV-slnBVFAi80Z0yKLvd3m-chlvoi1hRGVL8zYg~nht4-2GMGZC8lAMwpTOxwF1HMGu~GjP5rOa0o8Zvi4QgGRDP3Yxiu06aj9X0SVC1NTC-b~TXVYBJpqzCDbBINb1zmYgFIWkCSuwwvMKbO4u2w8sAR426k4ioDK5FebIDCg50LNtcTnHTWFa3dyDliFjgG5CbR9jgO64yOV8iXHal2sX2oS4lu3boADNscMKROKkZ4HrvUDCsElU0RhgSkEJvrj1USSn8qKMY-vcgPyTV15igS2EGwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 220
        },
        {
            id: 3,
            title: "Double standart room",
            smoking: false,
            maxPeople: 3,
            imageURL: "https://s3-alpha-sig.figma.com/img/1aee/e4c1/d6ec3974c9558ff794e712788fe6da9b?Expires=1691366400&Signature=Lk0aVIfeF1F9qSIMa0Dms36hhqwPzOVeyUhk7PdIdSkV4qoKVb9691QRmdttJTMVUdae4y0qoz4bXLXvr~Po-WBWLqjPEfUzmCBvN3HBlKmBg1~tfrzh~iGAhPWIhVo3P0ZfORawpjtmLTOZDkQMCz-a3zfrBQ6uCqBMkG7EI-a7We9ey20BkYZKsEQjaWSSPDpxHEPf8xt1wLLmfXwN~M2~aJ-sT1dLpQ2snl8AnhdoJg149j17x4BEJ140zxb5LrOuu5HDjYoBukX5NDGVuLcWvXAN92BgE7UnhjTlrbAIJv46Zt3KIJ0WYgxp7Ql~RaZuThl6gpWvGul-Xm2Cog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 180
        },
        {
            id: 4,
            title: "Double fancy room",
            smoking: false,
            maxPeople: 2,
            imageURL: "https://s3-alpha-sig.figma.com/img/bbf8/1d0a/4d6074d0f7951430d071f0f14c40a903?Expires=1691366400&Signature=nSkdMaR-yjtt4OY~Ak5iD0Lz3I807tfqG7QEk-eV9R4n2IeESIskxiCbV0Oh0FYzxxaFqW1kVPrr1s-7Y9H5rqm0sqKg1jeq0nLAvRW3wGnZWLnxm951XEHEDEeWR~Vsb9aEe1nGmqC4wi2twd8Hz9~bCoZ2jsW4n1cZU7zRFDtTzE3nuaOrTJdrgsc9ZKUKhcJyUHo3kl68aSYBetdR45N~MH2l5gae5z8e59xZzi35qSqQTf0e5Ky14q9Mb1bYQA~tv3stDQm~MCzzHsNbtyOn8~7fH6rG8RL-aCwR0jMwmo6IuhSag14cXW1XljoN-UfU6o981rraMxddqnfldg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 140
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
                    {hotelNav.map((nav,idx)=>{return <a href={nav.id} key={idx} className={`${s.hotel__nav} ${(navSelected == idx && s.hotel__nav_active)}`} onClick={()=>{setNavSelected(idx); setBackModifier(prev => prev + 1)}}>{nav.title}</a>})}
                </nav>
                <section className={s.hotel__overview} id="overview">
                    <h3 className={s.overview__title}>Proprety overview</h3>
                    <div className={s.service__grid}>
                        {services && services.map((service,idx)=>{
                            return <li key={idx} className={s.service__name}>{service.title}</li>
                        })}
                    </div>
                </section>
            </div>
            <section className={s.rooms} id="rooms">
                <div className={s.container}>
                    <h3 className={s.section__title}>Rooms</h3>
                    <div className={s.rooms__grid}>
                        {rooms && rooms.map((room,idx)=>{
                            return <RoomCard key={room.id} smoking={room.smoking} id={room.id} title={room.title} price={room.price} maxPeople={room.maxPeople} imageURL={room.imageURL}/> 
                        })}
                    </div>
                </div>
            </section>
            <section className={s.reviews} id="reviews">
                <div className={s.container}>
                    <h3 className={s.section__title}>Reviews</h3>
                    <div className={s.reviews__grid}>
                        <div className={s.rating__total}>
                            <p className={s.rating__title}>Average rating</p>
                            <h4 className={s.rating}>{rating}</h4>
                        </div>
                        <div className={s.hotel__reviews}>
                            
                            <Review username={'Mark M.'} reviewId={1} userId={1} comment={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo ratione est excepturi aut deserunt quia. Quasi, ipsa nobis. Soluta, iusto asperiores. Non magnam perspiciatis nemo error asperiores corporis? Odit facilis natus aperiam optio, autem harum!'} rating={9.6} date={"March 20"}/>
                            <Review username={'Mark M.'} reviewId={1} userId={1} comment={'Otdoxnul diko'} rating={6.152} date={"March 2"}/>
                            <Review username={'Mark M.'} reviewId={1} userId={1} comment={'Otdoxnul diko'} rating={4} date={"September 21"}/>
                            <Review username={'Mark M.'} reviewId={1} userId={1} comment={'Otdoxnul diko'} rating={9.6} date={"September 21"}/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default HotelPage;