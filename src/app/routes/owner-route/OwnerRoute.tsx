import { useAppSelector } from '@/hooks/redux/reduxHooks';
import { getRole } from '@/store/user/api';
import { selectUserToken } from '@/store/user/selectors';
import { ROUTE_PATH } from '@/types/other';
import { useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface OwnerRouteProps {
    Component: React.FC,
}
const OwnerRoute:FC<OwnerRouteProps> = ({Component}) => {
    const toast = useToast()
    const token = useAppSelector(selectUserToken)
    const verifiedRoles = ["Owner User", "Admin"]
    const role = token ? getRole(token) : "Guest";
    const hasValidRole = role !== undefined && verifiedRoles.includes(role);
    return hasValidRole
        ? <Component/>
        : <div>
            <Navigate to={ROUTE_PATH.HOME}/> 
            {toast({
                title: "You are unauthorized to view this page.",
                status: "error",
                description: "Create an owner account to access this page",
                isClosable: true,
                duration: 3000,
                position: "bottom",
            })}
        </div>;
};

export default OwnerRoute;