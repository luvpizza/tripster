import Searchbar from '@/components/Searchbar/Searchbar';
import GoBackButton from '@/components/UI/buttons/GoBackButton/GoBackButton';
import React from 'react';

import s from "./NotFoundPage.module.scss"
const NotFoundPage : React.FC = () => {
    return (
        <div className={s.not__found}>
            <div className={s.container}>
                <GoBackButton/>
                <div className={s.banner}>
                    Content not found
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;