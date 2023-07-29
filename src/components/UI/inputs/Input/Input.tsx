import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes < HTMLInputElement > {
    fullWidth?: boolean,
    icon: string,
    type?: "text" | "password"
}

const Input: FC<InputProps> = ({fullWidth, icon, type="text"}) => {
    return (
        <input type={type} />
    );
};

export default Input;