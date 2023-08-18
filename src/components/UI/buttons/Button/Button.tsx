import { Spinner } from '@chakra-ui/react';
import React, {FC, ButtonHTMLAttributes} from 'react';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes < HTMLButtonElement > {
    buttonType: 'solid' | 'outlined';
    fullWidth?: boolean;
    loading?: boolean;
    type?:string,
}

const Button : FC < ButtonProps > = ({
    className,
    buttonType,
    children,
    loading,
    fullWidth,
    type,
    ...rest
}) => {

    return (
        <button
            disabled={loading}
            type={type}
            className={`${s.btn} ${fullWidth
            ? s.fullwidth
            : ''} ${className
                ? className
                : ''} ${buttonType === 'solid'
                    ? s.btn__solid
                    : buttonType === 'outlined' && s.btn__outlined}`}
            {...rest}>
            {loading
                ? <Spinner size={'sm'}/>
                : children}
        </button>
    );
};

export default Button;
