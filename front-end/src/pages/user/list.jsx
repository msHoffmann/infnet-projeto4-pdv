import { useLocation } from 'react-router-dom';

const ListUser = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>List User</h1>
}

export default ListUser;