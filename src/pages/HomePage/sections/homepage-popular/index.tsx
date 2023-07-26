import CityCard from "@/components/cards/CityCard/CityCard";
import {FC} from "react";

import s from "./index.module.scss"
const HomePagePopular : FC = () => {

    const popular = [
        {
            name: "Spain",
            imageURL: "http"
        },
        {
            name: "London",
            imageURL: "http"
        },
        {
            name: "Lisbon",
            imageURL: "http"
        },
        {
            name: "Croatia",
            imageURL: "http"
        },
        {
            name: "Bratislava",
            imageURL: "http"
        },
        {
            name: "Copenhagen",
            imageURL: "http"
        },
    ]

    return (
        <section className={s.home__popular}>
            <h3 className={s.popular__title}>Popular destinations</h3>
            <div className={s.popular__grid}>
                {popular.map((city,idx)=>{return <CityCard name={city.name} imageURL={city.imageURL} className={`${s.grid__city}`}/>})}
            </div>
        </section>
    );
};

export default HomePagePopular;