import React, { FC } from 'react';
import GoBackButton from '../UI/buttons/GoBackButton/GoBackButton';

import s from "./NotFound.module.scss"
const NotFound: FC = () => {
    return (
        <div className={s.not_found}> 
            <h2>Not Found</h2>
        </div>
    );
};

export default NotFound;