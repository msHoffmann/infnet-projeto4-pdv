import { useLocation } from 'react-router-dom';

const ListProduct = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>List Product</h1>
}

export default ListProduct;