import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let postMessage = React.useRef(null);

    let addPost = () => {
        let text = postMessage.current.value;
        // props.addPost(text)
        let action = addPostActionCreator(text);
        props.dispatch(action)
    }

    let postChange = () => {
        let text = postMessage.current.value;
        // props.updateNewPostText();
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newPostText: text };
        // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newPostText: text })
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea className={s.textarea} onChange={ postChange } ref={postMessage} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
