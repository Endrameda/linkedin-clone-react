import React from 'react';
import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import Feed from "./features/feed/Feed";
import Widgets from "./features/widgets/Widgets";

const Main = () => {
    return (
        <>
            <Header/>
            <main className="app__body container">
                <Sidebar/>
                <Feed/>
                <Widgets/>
            </main>
        </>
    );
};

export default Main;