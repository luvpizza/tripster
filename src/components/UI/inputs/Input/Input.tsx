import React, { FC, InputHTMLAttributes, ReactNode, useRef } from 'react';
import s from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean,
    icon?: ReactNode,
    type?: "text" | "password",
    error?: boolean,
    helperText?: string | false | undefined
}

const Input: FC<InputProps> = ({
    fullWidth,
    icon,
    type,
    error,
    helperText,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleWrapperClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={s.input__custom} onClick={handleWrapperClick}>
            <div className={`${s.wrapper} ${error && s.error}`}>
                {icon && <div className={s.wrapper__icon}>{icon}</div>}
                <input
                    id="input"
                    className={s.input}
                    ref={inputRef}
                    {...rest}
                    type={type}
                />
            </div>
            {error && helperText && <p className={s.field__error}>{helperText}</p>}
        </div>
    );
};

export default Input;
