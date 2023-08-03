import { Routes, Route } from 'react-router-dom';
import { authRoutesArr, privateRoutesArr, publicRoutesArr } from './routes';
import { Layout } from '@/components/Layout/Layout';
import PrivateRoute from './private-route/PrivateRoute';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import AuthRoute from './auth-route/AuthRoute';

const AppRouter = () => {
    return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path={"*"} element={<NotFoundPage/>}/>
            {privateRoutesArr.map(({ path, Component }) => (
                <Route key={path} path={path} element={<PrivateRoute Component={Component} />} />
                ))}
            {publicRoutesArr.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
                ))}
            {authRoutesArr.map(({path, Component})=>(
                <Route key={path} path={path} element={<AuthRoute Component={Component}/>}/>
            ))}
        </Route>
    </Routes>
    );
};

export default AppRouter;