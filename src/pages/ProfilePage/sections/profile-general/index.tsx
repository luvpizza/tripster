import {useGetCurrentUserQuery} from '@/app/api/user/userApi';
import NotFound from '@/components/NotFound/NotFound';
import Preloader from '@/components/Preloader/Preloader';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import {selectUserToken} from '@/store/user/selectors';
import {FC, useEffect} from 'react';
import s from "./index.module.scss"

const ProfileInfo : FC = () => {
    const token = useAppSelector(selectUserToken)
    const {data: currentUserData, isLoading, error, isFetching} = useGetCurrentUserQuery(token, {refetchOnMountOrArgChange: true});


    return (
        <section className={s.profile__info}>
             {isLoading && !error && <div className={s.general__preloader}><Preloader size="xl"/></div>}
            {!isLoading && !isFetching && !currentUserData && <div className={s.general__not_found}><NotFound/></div>}
            {(currentUserData && !isLoading) && <div>
                <h1 className={s.section__title}>Personal details</h1>
                <p className={s.section__subtitle}>See your personal details</p>
                <div className={s.info__grid}>
                    <div className={s.grid__item}>
                        <h3 className={s.item__key}>Full name</h3>
                        <p className={s.item__value}>{currentUserData.fullName}</p>
                    </div>
                    <div className={s.grid__item}>
                        <h3 className={s.item__key}>E-mail</h3>
                        <p className={s.item__value}>{currentUserData.email}</p>
                    </div>
                    <div className={s.grid__item}>
                        <h3 className={s.item__key}>E-mail status</h3>
                        <p className={s.item__value}>{currentUserData.emailConfirmed ? "Confirmed" : "Not confirmed"}</p>
                    </div>
                </div>
            </div>}
        </section>
    );
};

export default ProfileInfo;