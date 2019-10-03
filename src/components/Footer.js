import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="footer">
            <FontAwesomeIcon icon={['fab', 'facebook']}/>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            <FontAwesomeIcon icon={['fab', 'instagram']}/>
        </footer>
    );
}

export default Footer;