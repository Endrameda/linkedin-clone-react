import React from 'react';

import './Sidebar.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../user/userSlice";

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.wallpaperscraft.ru/image/gradient_razmytost_abstraktsiia_157512_1280x720.jpg"
                     alt=""/>
                <Avatar className="sidebar__avatar" alt="Avatar"
                        src={user?.photoUrl}>
                    {user && (user?.displayName ? user?.displayName[0].toUpperCase() : user.email[0].toUpperCase())}
                </Avatar>
                <h2 className="sidebar__title">{user?.displayName}</h2>
                <h4 className="sidebar__email">{user?.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className="sidebar__statText">Who viewed you</p>
                    <p className="sidebar__statNumber">2,540</p>
                </div>
                <div className="sidebar__stat">
                    <p className="sidebar__statText">Who viewed you</p>
                    <p className="sidebar__statNumber">2,540</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React.js')}
                {recentItem('Programming')}
                {recentItem('Node')}
                {recentItem('Vue')}
                {recentItem('Angular')}
                {recentItem('Express')}
            </div>
        </div>
    );
};

export default Sidebar;
