import { useLocation } from 'react-router-dom';

const usePathnameId = () => {
    const location = useLocation()
    const pathname = location.pathname;
    const parts = pathname.split("/");
    const id = parts[2]; 
    return id
}

export default usePathnameId