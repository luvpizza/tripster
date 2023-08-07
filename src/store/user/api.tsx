import { BASE_URL } from "@/app/api/BASE_URL"
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHooks"
import axios from "axios"
import { selectUser, selectUserToken } from "./selectors"
import { removeUser } from "./slice";
import { useToast } from "@chakra-ui/react";
import { useAddFavoriteHotelMutation } from "@/app/api/user/userApi";
import { useNavigate } from "react-router-dom";

export const useAddFavorite = (id: number) => {
    
}


export const useCheckUser = () => {
    const toast = useToast()
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser);
    const [userAuth, setUserAuth] = useState(false);
    useEffect(() => {
        if (user) {
            const token = user.accessToken;
            const reduxName = user.fullName;

            axios.get(`${BASE_URL}/Auth/getCurrentUser`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((res) => {
                const serverName = res.data.fullName;
                if (serverName === reduxName) {
                    setUserAuth(true);
                } else {
                    setUserAuth(false);
                }
            })
            .catch((error) => {
                console.error("Error checking user authentication:", error);
                setUserAuth(false);
                dispatch(removeUser())
                toast({status:"error", title:"An error occured. You've been logged out."})
            });
        } else {
            setUserAuth(false);
            dispatch(removeUser())
            toast({status:"error", title:"An error occured. You've been logged out."})
        }
    }, [user]);

    return userAuth;
}