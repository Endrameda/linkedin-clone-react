import React from 'react';

import './HeaderOption.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../user/userSlice";

const HeaderOption = ({avatar, Icon, title, onClick}) => {
    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="header-option">
            {Icon && <Icon className="header-option__icon"/>}
            {avatar &&
            <Avatar className="header-option__avatar"
                    src={user?.photoUrl}>{user?.displayName ? user?.displayName[0]?.toUpperCase() : user?.email[0].toUpperCase()}</Avatar>}

            <h3 className="header-option__title">{title}</h3>
        </div>
    );
};

export default HeaderOption;
