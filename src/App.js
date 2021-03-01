import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {auth} from "./app/firebase";

import Login from "./features/login/Login";
import Main from "./Main";
import Preloader from "./features/preloader/Preloader";


import './App.scss';

import {login, logout, selectUser} from "./features/user/userSlice";


function App() {
    const [initialized, setInitialized] = useState(false);
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // user is logged in
                dispatch(login({
                    displayName: userAuth.displayName,
                    email: userAuth.email,
                    uid: userAuth.uid,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                // user is logged out
                dispatch(logout())
            }
            setInitialized(true)
        })
    }, []) // eslint-disable-line

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app">
            {user ? <Main/> : <Login/>}
        </div>
    );
}

export default App;
