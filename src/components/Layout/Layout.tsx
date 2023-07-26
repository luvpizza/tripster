import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import s from './Layout.module.scss';
import Footer from '@/components/Footer/Footer';

export const Layout : React.FC = () => {

    return (
        <div className={s.layout}>
            <Header/>
            <div className={s.layout__content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};