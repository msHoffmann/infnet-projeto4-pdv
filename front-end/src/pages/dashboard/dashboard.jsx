import { useLocation } from 'react-router-dom';

const Dashboard = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>Dashboard</h1>
}

export default Dashboard;