import React from 'react';
import {Link} from 'react-router-dom'
import Button from "@/components/UI/buttons/Button/Button"
import s from "./Header.module.scss"

const Header = () => {
    // user check logic
    return (
        <header className={s.header}>
            <div className={s.header__links}>
                <Link className={s.header__logo} to={"/"}>Tripster</Link>
                <nav className={s.header__nav}>
                    <Link to={"/"}>Properties</Link>
                    <Link to={"/"}>Attraction</Link>
                    <Link to={"/"}>Popular</Link>
                </nav>
            </div>
            <div className={s.header__btns}>
                <Button buttonType='outlined'>Sign Up</Button>
                <Button buttonType='solid'>Log In</Button>
            </div>
        </header>
    );
};

export default Header;