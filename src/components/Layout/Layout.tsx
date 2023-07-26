import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import s from './Layout.module.scss';

export const Layout: React.FC = () => {

    return (
        <div className={s.layout}>
            <Header />
            <Outlet/>
        </div>
    );
};