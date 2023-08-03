import {FC } from 'react';
import { Navigate } from 'react-router-dom';
import {ROUTE_PATH} from '@/types/other';
import {useToast} from '@chakra-ui/react'
type AuthRouteProps = {
    Component: React.FC;
};

const AuthRoute : FC < AuthRouteProps > = ({Component}) => {
    const isLogged = false; //need real auth state
    const toast = useToast()
    return !isLogged
        ? <Component/>
        : <div>
            {toast({title: "You are already logged in.", status: "info"})}
            <Navigate to={ROUTE_PATH.HOME}/>
        </div>;
};

export default AuthRoute;
