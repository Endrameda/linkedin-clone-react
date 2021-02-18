import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './Feed.scss';


import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from "../inputOption/InputOption";
import Post from "../post/Post";


import { db } from "../../app/firebase";
import firebase from "firebase";
import { selectUser } from "../user/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser)
    const [ input, setInput ] = useState('')
    const [ post, setPost ] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', "desc").onSnapshot(spanshot => {
            setPost(spanshot.docs.map(doc => (
                {
                    id : doc.id,
                    data : doc.data()
                }
            )))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault()
        if ( !input ) {
            return false
        }
        db.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message : input,
            photoUrl : user.photoUrl || '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form onSubmit={ sendPost }>
                        <input type="text" placeholder="New publication"
                               value={ input }
                               onChange={ e => setInput(e.target.value) }
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ ImageIcon } title="Photo" color={ '#70b5f9' }/>
                    <InputOption Icon={ SubscriptionsIcon } title="Video" color={ '#7fc15e' }/>
                    <InputOption Icon={ EventNoteIcon } title="Event" color={ '#e7a33e' }/>
                    <InputOption Icon={ CalendarViewDayIcon } title="Write Article" color={ '#f5987e' }/>
                </div>
            </div>

            {/*  Posts  */ }
            <FlipMove>
                { post.map(({ id, data : { name, description, message, photoUrl } }) => (
                    <Post
                        key={ id }
                        name={ name }
                        description={ description }
                        message={ message }
                        photoUrl={ photoUrl }
                    />
                )) }
            </FlipMove>
        </div>
    );
};

export default Feed;
