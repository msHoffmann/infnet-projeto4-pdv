import { useLocation } from 'react-router-dom';

const ListCategory = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>List Category</h1>
}

export default ListCategory;