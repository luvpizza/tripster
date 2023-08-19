import Button from '@/components/UI/buttons/Button/Button';
import Rating from '@/components/UI/misc/Rating/Rating';
import {
    Button as ChakraButton,
    CircularProgress,
    CircularProgressLabel,
    Divider,
    FormLabel,
    Image,
    Input,
    Textarea,
    useDisclosure
} from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';
import {FC, useRef} from 'react';
import {Link} from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

import s from "./HotelCardManage.module.scss"

interface HotelCardManageProps {
    id : number,
    name : string,
    description : string,
    imageURL : string
}

const HotelCardManage : FC < HotelCardManageProps > = ({id, name, description, imageURL}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    const handleDivClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    return (
        <div className={s.card__content}>

            <div className={s.hotel__card}>
                <div className={s.card__img}>
                    <Rating className={s.rating} type={"small"} rating={9}/>
                    <Image
                        src={imageURL}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                </div>
                <div className={s.card__main}>
                    <Link to={`/hotel/${id}`} target={"_blank"} className={s.hotel__name}>{name}</Link>
                    <h2 className={s.hotel__description}>{description}</h2>
                </div>
                <div className={s.hotel__tags}>
                    <h2>Luxury</h2>
                    <h3 className={s.divider}>|</h3>
                    <h2>Five-Star</h2>
                    <h3 className={s.divider}>|</h3>
                    <h2>192 reviews</h2>
                </div>
                <div className={s.hotel__stats}>
                    <CircularProgress value={86} size={"72px"} color='#009D52'>
                        <CircularProgressLabel color={"#009D52"}>86</CircularProgressLabel>
                    </CircularProgress>
                    <p>% of tourists rated this hotel as <span className={s.good}>Good</span>
                    </p>
                </div>
                <Button className={s.edit__btn} buttonType={"solid"} fullWidth onClick={onOpen}>Edit</Button>
            </div>
            <div className={s.card__edit}>
                <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
                    <DrawerOverlay/>
                    <DrawerContent className={s.drawer}>
                        <DrawerCloseButton/>
                        <DrawerHeader>{`Edit ${name}`}</DrawerHeader>
                        <DrawerBody>
                            <form className={s.edit__form}>
                                <div className={s.form__item}>
                                    <FormLabel>Name:</FormLabel>
                                    <Input value={name}/>
                                </div>
                                <div className={s.form__item}>
                                    <FormLabel>Description:
                                    </FormLabel>
                                    <Textarea value={description} resize={"none"} height={140}/>
                                </div>
                                <Divider/>
                                <div className={s.form__item}>
                                    <FormLabel>Photos:
                                    </FormLabel>
                                    <div className={s.edit__photos}>
                                        <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="" />
                                        <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="" />
                                        <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="" />
                                        <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="" />
                                        <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="" />
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                        />
                                        <div className={s.edit__photos_add} onClick={handleDivClick}>Add</div>
                                    </div>
                                </div>
                                <div className={s.form__item}>
                                <FormLabel>Rooms:
                                    </FormLabel>
                                    <div className={s.edit__rooms}>
                                        
                                    </div>
                                </div>
                            </form>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
};

export default HotelCardManage;