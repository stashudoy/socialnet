import React, { Component } from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhe5lUqQZZVz4fqagaeVwKrrN58P8p4g5_A&s"></img>
            <div>{props.message}</div>
            <span>Likes: {props.likesCount}</span>
            
        </div>


    )
}

export default Post