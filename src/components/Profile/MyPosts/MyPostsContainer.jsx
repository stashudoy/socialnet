import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
      //20:00
      let state = props.store.getState()
      
      let addPost = () => {    
            props.store.dispatch(addPostActionCreator())                
      }

      let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
            props.store.dispatch(action)
      }  

      
    return(  <MyPosts 
      posts={state.profilePage.posts}
      updateNewPostTex={onPostChange} 
      addPost={addPost} 
      newPostText={state.profilePage.newPostText}
     /> )
}

export default MyPostsContainer