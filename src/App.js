import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./app/firebase";
import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import Feed from "./features/feed/Feed";
import Login from "./features/login/Login";
import Widgets from "./features/widgets/Widgets";

import './App.scss';

import { login, logout, selectUser } from "./features/user/userSlice";

function App () {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {

            if ( userAuth ) {
                // user is logged in
                dispatch(login({
                    displayName : userAuth.displayName,
                    email : userAuth.email,
                    uid : userAuth.uid,
                    photoUrl : userAuth.photoURL
                }))
            } else {
                // user is logged out
                dispatch(logout())
            }
        })
    }, [])

    return (
        <div className="app">
            { !user ? <Login/> : (<>
                    <Header/>
                    <main className="app__body container">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </main>
                </>
            ) }
        </div>
    );
}

export default App;
