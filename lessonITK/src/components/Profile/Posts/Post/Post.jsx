import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>

            <img src='https://i.pinimg.com/originals/e4/de/32/e4de32ca611e6366e9d2cdd63e2523e7.jpg' alt='pic.'></img>

            {props.message}
            <div className={s.like}> Liks </div> {props.likesCount}
        </div>
    )
}

export default Post;
