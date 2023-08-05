import {FC, ReactNode} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {ROUTE_PATH} from '@/types/other';
import {useToast} from '@chakra-ui/react';
import { useAppSelector } from '@/hooks/redux/reduxHooks';
import { selectUser } from '@/store/user/selectors';

type PrivateRouteProps = {
    Component: React.FC;
};

const PrivateRoute : FC < PrivateRouteProps > = ({Component}) => {
    const toast = useToast()
    const isLogged = useAppSelector(selectUser)
    return isLogged
        ? <Component/>
        : <div>
            <Navigate to={ROUTE_PATH.LOGIN}/> 
            {toast({
                title: "You are unauthorized to view this page.",
                status: "error",
                description: "Log in to continue",
                isClosable: true,
                duration: 3000,
                position: "top",
            })}
        </div>;
};

export default PrivateRoute;
