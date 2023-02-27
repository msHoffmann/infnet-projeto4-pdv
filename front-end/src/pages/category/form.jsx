import { useLocation } from 'react-router-dom';

const FormCategory = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>Form Category</h1>
}

export default FormCategory;