import React, {FC, useState} from 'react';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import s from "./HotelManagePage.module.scss"
import {selectUser} from '@/store/user/selectors';
import {NavTab} from '@/types/other';
import ManageCreateHotel from './sections/manage-create-hotel';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import AddHomeIcon from '@mui/icons-material/AddHome';
import VillaIcon from '@mui/icons-material/Villa';
import ManageHotels from './sections/manage-hotels';

const HotelManagePage : FC = () => {
    const user = useAppSelector(selectUser)

    const [selectedTab,
        setSelectedTab] = useState(0);

    const navTabs : NavTab[] = [
        {
            tabId: 0,
            title: "Your hotels",
            section: <ManageHotels/>,
            icon: <VillaIcon/>,
        },
        {
            tabId: 1,
            title: "Create new Hotel",
            section: <ManageCreateHotel/>,
            icon: <AddHomeIcon/>
        },
    ]
    return (
        <section className={s.manage}>
            <div className={s.container}>
                <div className={s.manage__grid}>
                    <div className={s.grid__left}>
                        <GoBackButton/>
                        <nav className={s.manage__nav}>
                        <h1 className={s.nav__title}>Manage your hotels</h1>
                        <div className={s.nav__tabs}>
                            {navTabs.map(tab => <div
                                key={tab.tabId}
                                className={`${s.nav__tab} ${tab.tabId == selectedTab && s.nav__active}`}
                                onClick={() => {
                                    setSelectedTab(tab.tabId)
                                }}>{tab.icon}{tab.title}</div>)}
                        </div>
                        </nav>
                    </div>
                    <div className={s.manage__section}>
                        {navTabs[selectedTab].section}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelManagePage;