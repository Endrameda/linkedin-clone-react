import React from 'react';
import './App.scss';
import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import Feed from "./features/feed/Feed";

function App () {
    return (
        <div className="app">
            <Header/>
            <div className="app__body container">
                {/*  Left side  */ }
                <Sidebar/>
                <Feed/>
                {/*  Feed  */ }
                {/*  Widgets  */ }
            </div>
        </div>
    );
}

export default App;
