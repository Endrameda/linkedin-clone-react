import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { logout, selectUser } from "../user/userSlice";

import './Header.scss';
import logo from '../../assets/icons/linkedin.svg';

import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from "../headerOption/HeaderOption";
import Search from "../search/Search";
import { auth } from "../../app/firebase";


const Header = () => {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

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
                        avatar={ true }
                        onClick={ logoutOfApp }
                        title="Profile"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
