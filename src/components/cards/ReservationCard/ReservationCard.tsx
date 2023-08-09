import {useDisclosure} from '@chakra-ui/react';
import {FC} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import s from "./ReservationCard.module.scss"
import useFormattedDate from '@/hooks/useFormattedDate/useFormattedDate';
import Button from '@/components/UI/buttons/Button/Button';
import { Link } from 'react-router-dom';

interface ReservationCardProps {
    id : number,
    price : number,
    hotelName : string,
    hotelId : number,
    roomName : string,
    roomId : number,
    reserveStart : string,
    reserveEnd : string,
    smoke : boolean,
    guests : number,
    maxGuests : number,
    refetch: ()=>void,
    handleCancel: ()=>void,
}

const ReservationCard : FC < ReservationCardProps > = ({
    id,
    price,
    hotelName,
    hotelId,
    roomName,
    roomId,
    reserveStart,
    reserveEnd,
    smoke,
    guests,
    maxGuests,
    refetch,
    handleCancel,
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <div className={s.reservation__wrapper}>
            <div className={s.reservation__card}>
                <div className={s.reservation__main}>
                    <p className={s.reservation__hotel}>
                        <b>{roomName}</b> in <b><Link className={s.link} to={`/hotel/${hotelId}`}>{hotelName}</Link></b>
                    </p>
                    <p className={s.reservation__dates}>{`${useFormattedDate(reserveStart)} - ${useFormattedDate(reserveEnd)}`}</p>
                    <Button buttonType='solid' onClick={onOpen}>Details</Button>
                </div>
            </div>
            <div className={s.reservation__full}>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>{`${roomName} reservation in ${hotelName}`}</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <div className={s.modal__info}>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Room:</h1>
                                    <p className={s.info__value}>{roomName}</p>
                                </div>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Hotel:</h1>
                                    <Link to={`/hotel/${hotelId}`} className={s.info__value}>{hotelName}</Link>
                                </div>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Guests count:</h1>
                                    <p className={s.info__value}>{guests} guest(-s)</p>
                                </div>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Check-in:</h1>
                                    <p className={s.info__value}>{useFormattedDate(reserveStart)}</p>
                                </div>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Check-out:</h1>
                                    <p className={s.info__value}>{useFormattedDate(reserveEnd)}</p>
                                </div>
                                <div className={s.info__item}>
                                    <h1 className={s.info__key}>Smoking:</h1>
                                    <p className={`${s.info__value} ${smoke ? s.success : s.error}`}>{smoke ? "Allowed" : "Not allowed"}</p>
                                </div>

                                    <h1 className={s.info__price}>TOTAL PRICE: {price}$</h1>
                            </div>
                        </ModalBody>

                        <ModalFooter className={s.modal__footer} justifyContent={"space-between"}>
                            <Button buttonType='outlined' className={s.reservation__cancel} onClick={()=>{handleCancel();}}>Cancel</Button>
                            <Button buttonType='solid' onClick={()=>{onClose(); refetch()}}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default ReservationCard;

{/* <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */
}