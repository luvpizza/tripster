import CityCard from '@/components/cards/CityCard/CityCard';
import { FC } from 'react';

import s from "./HomePage.module.scss"
import HomePageHotels from './sections/homepage-hotels';
import HomePagePopular from './sections/homepage-popular';
import HomePageSearchbar from './sections/homepage-searchbar';

const HomePage: FC = () => {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <HomePageSearchbar/>
                <HomePagePopular/>
                <HomePageHotels/>
            </div>
        </section>
    );
};

export default HomePage;