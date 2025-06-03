import React, { Component } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {


      let postsElements = props.profilePage.posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>))
      let newPostElement = React.createRef()
      
      let addPost = () => {
            let text = newPostElement.current.value
            props.addPost(text)
           
      }
      let onPostChange = () => {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            
      }
    return(            
          <div>My posts 
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}></textarea>                
                <div><button onClick={addPost}>Add Post</button></div>
                </div>
          
                <div className={s.posts}>
                   {postsElements}
                   
                </div>
          </div>

       
    )
}

export default MyPosts