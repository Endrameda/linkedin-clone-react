import React, { useState } from 'react';
import './Login.scss';
import { auth } from "../../app/firebase";
import { useDispatch } from "react-redux";
import { login } from "../user/userSlice";

const Login = () => {
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ profilePicture, setProfilePicture ] = useState('')
    const dispatch = useDispatch()

    const loginToApp = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : name,
                photoUrl : profilePicture
            }))
        }).catch(error => new Error(error.message))
    }

    const register = () => {
        if ( !name ) {
            alert('Please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePicture
            }).then(() => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : name,
                    photoUrl : profilePicture
                }))
            }).catch(error => new Error(error.message))
        })
    }

    return (
        <main className="login">
            <div className="login__container container">
                <img className="login__logo" src="https://cdn.svgporn.com/logos/linkedin.svg" alt=""/>
                <form className="login__form">
                    <input value={ name } onChange={ e => setName(e.target.value) }
                           placeholder="Full name (required if registering)" type="text"/>

                    <input value={ profilePicture } onChange={ e => setProfilePicture(e.target.value) }
                           placeholder="Profile pic URL (optional)" type="text"/>

                    <input value={ email } onChange={ e => setEmail(e.target.value) } placeholder="Email" type="email"/>

                    <input value={ password } onChange={ e => setPassword(e.target.value) } placeholder="Password"
                           type="password"/>

                    <button onClick={ loginToApp }>Sign In</button>
                </form>

                <p className="login__afterText">Not a member? &nbsp;
                    <span className="login__register" onClick={ register }>Register now</span>
                </p>
            </div>
        </main>
    );
};

export default Login;
