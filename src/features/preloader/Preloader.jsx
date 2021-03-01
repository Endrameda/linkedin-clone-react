import React from 'react';
import logo from '../../assets/icons/linkedin.svg';

import './Preloader.scss';

const Preloader = () => {
    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <img src={logo} alt="Linkedin logo" className="logo"/>
                <div className="loading-bar"/>
            </div>
        </div>
    );
};

export default Preloader;