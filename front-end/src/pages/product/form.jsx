import { useLocation } from 'react-router-dom';

const FormProduct = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);
    return <h1>Form Product</h1>
}

export default FormProduct;