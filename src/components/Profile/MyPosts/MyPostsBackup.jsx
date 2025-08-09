import React, { Component } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'






const MyPosts = (props) => {
      
      let posts = props.store.getState().profilePage.posts
      let postsElements = posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>))

      let newPostElement = React.createRef()
      
      let onAddPost = () => {    
            //props.addPost()   
            props.store.dispatch(addPostActionCreator())           
      }

      let onPostChange = () => {
            let text = newPostElement.current.value
            //props.updateNewPostText(text)
            let action = updateNewPostTextActionCreator(text)
            props.store.dispatch(action)
           
            
      }
    return(            
          <div>My posts 
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>                
                <div><button onClick={onAddPost}>Add Post</button></div>
                </div>
          
                <div className={s.posts}>
                   {postsElements}
                   
                </div>
          </div>

       
    )
}

export default MyPosts