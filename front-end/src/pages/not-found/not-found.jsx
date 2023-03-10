import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './not-found.css';
import { useLocation } from 'react-router-dom';


const NotFound = ({ title, text, link, link_name, setCurrentRoute }) => {
    const location = useLocation();

    useEffect(() => {
        setCurrentRoute(location.pathname);
    }, [])
    
    return <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h3>{title}</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>{text}</h2>
                    <p>Voltar para <Link to={link}>{link_name}</Link></p>
                </div>
            </div>
}

NotFound.defaultProps = {
    title: "Oops! Página não encontrada!",
    text: "Sentimos muito, mas essa página não foi encontrada!",
    link: "/",
    link_name: "Home"
}

NotFound.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    lnk_name: PropTypes.string
}


export default NotFound;