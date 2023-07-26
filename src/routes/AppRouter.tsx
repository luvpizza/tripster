import { Routes, Route } from 'react-router-dom';
import { privateRoutesArr, publicRoutesArr } from './routes';
import PrivateRoute from './private-route/PrivateRoute';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import { Layout } from '@/components/Layout/Layout';

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
        </Route>
    </Routes>
    );
};

export default AppRouter;
