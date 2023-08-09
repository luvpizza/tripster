import {BASE_URL} from "@/app/api/BASE_URL"
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/hooks/redux/reduxHooks"
import axios from "axios"
import {selectUser} from "./selectors"
import {removeUser} from "./slice";
import {useToast} from "@chakra-ui/react";
import { decodeToken } from "react-jwt";

export const useCheckUser = () => {
    const toast = useToast()
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser);
    const [userAuth,
        setUserAuth] = useState(false);
    useEffect(() => {
        if (user) {
            const token = user.accessToken;
            const reduxName = user.fullName;

            axios
                .get(`${BASE_URL}/Auth/getCurrentUser`, {
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
                    toast({status: "error", title: "An error occured. You've been logged out."})
                });
        } else {
            setUserAuth(false);
            dispatch(removeUser())
            toast({status: "error", title: "An error occured. You've been logged out."})
        }
    }, [user]);

    return userAuth;
}

export const getRole = (token: string): string | undefined => {
    const decodedToken: { [key: string]: string } | null = decodeToken(token);
    const roleClaimField = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const roleValue = decodedToken?.[roleClaimField]; 
    console.log(roleValue);
    return roleValue;
};