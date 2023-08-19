import {FC, useState, useEffect} from 'react';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileInfo from './sections/profile-general';
import ProfileFavorites from './sections/profile-favorites';
import {useCheckUser} from '@/store/user/api';
import {useAppDispatch, useAppSelector} from '@/hooks/redux/reduxHooks';
import {removeUser} from '@/store/user/slice';
import {useNavigate} from 'react-router-dom';
import {NavTab} from '@/types/other';
import {selectUser} from '@/store/user/selectors';

import s from "./ProfilePage.module.scss"
import ProfileReservations from './sections/profile-reservations';

const ProfilePage : FC = () => {
    const isAuthenticated = useCheckUser();
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(removeUser())
        navigate("/")
    }
    const [selectedTab,
        setSelectedTab] = useState(0);
    const navTabs : NavTab[] = [
        {
            tabId: 0,
            icon: <PersonIcon/>,
            title: "Personal details",
            section: <ProfileInfo/>
        }, 
        {
            tabId: 1,
            icon: <MenuBookIcon/>,
            title: "Reservations",
            section: <ProfileReservations/>
        },
        {
            tabId: 2,
            icon: <FavoriteBorderIcon/>,
            title: "Favorites",
            section: <ProfileFavorites/>
        },
    ]
    
    return (
        <section className={s.profile}>
            <div className={s.container}>
                {isAuthenticated && <div className={s.profile__grid}>
                    <nav className={s.profile__nav}>
                        <GoBackButton/>
                        <h1 className={s.nav__title}>Your profile</h1>
                        <div className={s.nav__tabs}>
                            {navTabs.map(tab => <div
                                key={tab.tabId}
                                className={`${s.nav__tab} ${tab.tabId === selectedTab &&s.nav__active}`}
                                onClick={() => {
                                setSelectedTab(tab.tabId)
                            }}>{tab.icon}{tab.title}</div>)}
                            {(user!.role === "Owner User" || user!.role === "Admin") && <div className={`${s.nav__tab} ${s.manage}`} onClick={()=>{navigate('/manage')}}>Manage hotels</div>}
                            <div className={`${s.nav__tab} ${s.logout}`} onClick={handleLogout}><LogoutIcon/>Log out</div>
                        </div>
                    </nav>
                    <div className={s.profile__content}>
                        <div className={s.container}>
                            {navTabs[selectedTab].section}
                        </div>
                    </div>
                </div>
}
            </div>
        </section>
    );
};

export default ProfilePage;