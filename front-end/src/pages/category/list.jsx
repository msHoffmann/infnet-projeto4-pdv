import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../../services/auth';

const ListCategory = ({ setCurrentRoute }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        isUserLoggedIn(navigate, location.pathname);
        setCurrentRoute(location.pathname);
    }, [])

    return <h1>List Category</h1>
}

export default ListCategory;