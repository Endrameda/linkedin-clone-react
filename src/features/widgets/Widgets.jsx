import React from 'react';

import './Widgets.scss'

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{ heading }</h4>
                <p> { subtitle } </p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>
                    Widgets
                </h2>
                <InfoIcon/>
            </div>
            { newsArticle('Sardor is back', 'Top news today!') }
        </div>
    );
};

export default Widgets;
