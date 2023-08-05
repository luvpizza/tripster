import {FC } from 'react';
import { Navigate } from 'react-router-dom';
import {ROUTE_PATH} from '@/types/other';
import {useToast} from '@chakra-ui/react'
import { useAppSelector } from '@/hooks/redux/reduxHooks';
import { selectUser } from '@/store/user/selectors';
type AuthRouteProps = {
    Component: React.FC;
};

const AuthRoute : FC < AuthRouteProps > = ({Component}) => {
    const isLogged = useAppSelector(selectUser)
    const toast = useToast()
    return !isLogged
        ? <Component/>
        : <div>
            <Navigate to={ROUTE_PATH.HOME}/>
            {toast({title: "You are already logged in.", status: "info", position: "top", duration: 2200})}
        </div>;
};

export default AuthRoute;
