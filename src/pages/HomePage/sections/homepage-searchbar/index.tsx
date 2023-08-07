import Searchbar from '@/components/Searchbar/Searchbar';
import {FC} from 'react';

import s from "./index.module.scss"
const HomePageSearchbar : FC = () => {
    return (
        <section className={s.home__search}>
            <h1 className={s.search__title}>Book your stay with Tripster</h1>
            <h3 className={s.search__subtitle}>1,480,000 rooms around the world are waiting for you!</h3>
            <div className={s.searchbar}><Searchbar/></div>
        </section>
    );
};

export default HomePageSearchbar;