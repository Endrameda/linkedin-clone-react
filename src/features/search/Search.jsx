import React from 'react';

import './Search.scss';
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
    return (
        <div className="search">
            <label className="search__label">
                <SearchIcon className="search__icon"/>
                <input className="search__text" type="text" placeholder="Search"/>
            </label>
        </div>
    );
};

export default Search;
