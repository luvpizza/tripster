import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from "@/components/UI/buttons/Button/Button"
import s from "./Header.module.scss"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    return (
        <header className={s.header}>
            <div className={s.header__links}>
                <Link className={s.header__logo} to={"/"}>Tripster</Link>
                {location.pathname == '/' && <nav className={s.header__nav}>
                    <a href={"#popular"}>Popular</a>
                    <a href={"#loved"}>Trending</a>
                </nav>}
            </div>
            <div className={s.header__btns}>
                <Button buttonType='outlined' onClick={()=>{navigate('/signup')}}>Sign Up</Button>
                <Button buttonType='solid' onClick={()=>{navigate('/login')}}>Log In</Button>
            </div>
        </header>
    );
};

export default Header;