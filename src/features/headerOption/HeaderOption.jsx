import React from 'react';

import './HeaderOption.scss';
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="header-option">
            { Icon && <Icon className="header-option__icon"/> }
            { avatar && (
                <Avatar className="header-option__avatar" src={avatar}/>
            ) }
            <h3 className="header-option__title">{ title }</h3>
        </div>
    );
};

export default HeaderOption;
