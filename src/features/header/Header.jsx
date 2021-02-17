import React from 'react';
import './Header.scss';

import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../assets/icons/linkedin.svg';
import HeaderOption from "../headerOption/HeaderOption";
import Search from "../search/Search";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__left">
                    <img
                        src={ logo }
                        alt=""/>
                    <div className="header__search">
                        <Search/>
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption Icon={ HomeIcon } title="Home"/>
                    <HeaderOption Icon={ SupervisorAccountIcon } title="My network"/>
                    <HeaderOption Icon={ BusinessCenterIcon } title="Vacancies"/>
                    <HeaderOption Icon={ ChatIcon } title="Messaging"/>
                    <HeaderOption Icon={ NotificationsIcon } title="Messaging"/>
                    <HeaderOption
                        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFXXQqXvv-hdw/profile-displayphoto-shrink_100_100/0/1600770326005?e=1618444800&v=beta&t=Gi3rFr9N7pJ9THN_PwjiMZjm_NX593mF_79EqcRE5XU"
                        title="Profile"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
