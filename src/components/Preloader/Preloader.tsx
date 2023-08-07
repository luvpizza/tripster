import { Spinner } from '@chakra-ui/react';
import React, {FC} from 'react';
import s from "./Preloader.module.scss"


interface PreloaderProps {
    size?: "sm" | "md" | "lg" | "xl",
}

const Preloader: FC<PreloaderProps> = ({size = "md", ...rest}) => {
    return (
        <div className={s.preloader} {...rest}>
            <Spinner size={size}/>
        </div>
    );
};

export default Preloader;