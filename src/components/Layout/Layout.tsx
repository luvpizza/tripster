import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import s from './Layout.module.scss';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '../UI/misc/ScrollToTop/ScrollToTop';

export const Layout : React.FC = () => {

    return (
        <div className={s.layout}>
            <ScrollToTop/>
            <Header/>
            <div className={s.layout__content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};