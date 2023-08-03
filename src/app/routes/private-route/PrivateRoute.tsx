import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATH } from '@/types/other';

type PrivateRouteProps = {
  Component: React.FC;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {
  const user = false; //need real validation
  return user ? <Component /> : <Navigate to={ROUTE_PATH.LOGIN} />;
};

export default PrivateRoute;
