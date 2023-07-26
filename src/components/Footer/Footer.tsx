import React, {FC} from 'react';

import s from "./Footer.module.scss"
const Footer : FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footer__info}>
                    <h2 className={s.footer__logo}>Tripster</h2>
                    <p className={s.footer__text}>Your favorite hotel booking experience since 2023!</p>
                </div>
                <p className={s.footer__credentials}>Tripster © 2023. Developed by Shamiev S.</p>
            </div>
        </footer>
    );
};

export default Footer;