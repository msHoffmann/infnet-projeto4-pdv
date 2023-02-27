import { useLocation } from 'react-router-dom';

const ListSale = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>List Sale</h1>
}

export default ListSale;