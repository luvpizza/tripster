import {FC} from 'react';

import s from './Checkmark.module.scss'

interface CheckmarkProps {
    size : keyof typeof PREDEFINED_SIZE_MAP;
    color?: string;
}

interface CheckmarkStyle {
    width : string;
    height : string;
    '--checkmark-fill-color' ?: string;
}

const PREDEFINED_SIZE_MAP = {
    small: '16px',
    medium: '24px',
    large: '52px',
    xLarge: '72px',
    xxLarge: '96px'
};

const Checkmark : FC < CheckmarkProps > = ({
    size = 'large',
    color
}) => {
    const computedSize = PREDEFINED_SIZE_MAP[size] || size;
    const style : CheckmarkStyle = {
        width: computedSize,
        height: computedSize
    };
    if (color) {
        style['--checkmark-fill-color'] = color;
    }
    return (
        <svg
            className={s.checkmark}
            xmlns='http://www.w3.org/2000/svg'
            style={style}
            viewBox='0 0 52 52'>
            <circle className={s.checkmark__circle} cx='26' cy='26' r='25' fill='none'/>
            <path
                className={s.checkmark__check}
                fill='none'
                d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
        </svg>
    );
};

export default Checkmark;
