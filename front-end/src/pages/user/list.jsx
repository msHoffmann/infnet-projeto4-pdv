import { useLocation, useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../../services/auth';
import { useEffect } from 'react';

const ListUser = ({ setCurrentRoute }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        isUserLoggedIn(navigate, location.pathname);
        setCurrentRoute(location.pathname);
    }, [])

    return <h1>List User</h1>
}

export default ListUser;