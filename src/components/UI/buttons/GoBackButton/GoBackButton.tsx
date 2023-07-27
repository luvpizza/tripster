import React, {FC, ButtonHTMLAttributes} from 'react';
import {useNavigate} from "react-router-dom";

import s from './GoBackButton.module.scss'

interface GoBackButtonProps extends ButtonHTMLAttributes < HTMLButtonElement > {
    modifier?: number,
}


const GoBackButton : FC<GoBackButtonProps> = ({className, modifier = 0, ...rest}) => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate((-1 - modifier))} className={`${s.back__btn} ${className && className}`} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                    d="M9.65016 15.6333L8.82503 16.4585C8.47565 16.8079 7.91069 16.8079 7.56503 16.4585L0.339579 9.23674C-0.00979956 8.88736 -0.00979956 8.32241 0.339579 7.97675L7.56503 0.751292C7.91441 0.401913 8.47937 0.401913 8.82503 0.751292L9.65016 1.57642C10.0033 1.92952 9.99582 2.50562 9.63529 2.85128L5.15655 7.11817H15.8386C16.333 7.11817 16.7307 7.51586 16.7307 8.0102V9.19957C16.7307 9.69391 16.333 10.0916 15.8386 10.0916H5.15655L9.63529 14.3585C9.99953 14.7041 10.007 15.2803 9.65016 15.6333Z"
                    fill="#030303"/>
            </svg>
        </button>
    );
};

export default GoBackButton;