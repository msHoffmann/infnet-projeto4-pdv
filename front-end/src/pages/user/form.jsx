import { useLocation } from 'react-router-dom';

const FormUser = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>Form User</h1>
}

export default FormUser;