import React, {FC, ButtonHTMLAttributes} from 'react';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes < HTMLButtonElement > {
    buttonType: 'solid' | 'outlined';
    fullWidth?: boolean;
    loading?: boolean;
}

const Button : FC < ButtonProps > = ({
    className,
    buttonType,
    children,
    loading,
    fullWidth,
    ...rest
}) => {

    return (
        <button
            className={`${s.btn} ${fullWidth
            ? s.fullwidth
            : ''} ${className
                ? className
                : ''} ${buttonType === 'solid'
                    ? s.btn__solid
                    : buttonType === 'outlined' && s.btn__outlined}`}
            {...rest}>
            {loading
                ? 'Loading'
                : children}
        </button>
    );
};

export default Button;
