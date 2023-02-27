import { useLocation } from 'react-router-dom';

const Login = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>Login</h1>
}

export default Login;