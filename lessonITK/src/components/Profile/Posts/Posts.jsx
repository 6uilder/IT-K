import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import Post from './Post/Post';
import s from './Posts.module.css';



const Posts = (props) => {
    let postItems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    let newPostEl = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>

    )
}

export default Posts;
