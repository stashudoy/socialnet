import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
      
    return(  
      <StoreContext.Consumer>
            { (store) => { 
            let addPost = () => {    
                  store.dispatch(addPostActionCreator())                
            }      
            let onPostChange = (text) => {
                  let action = updateNewPostTextActionCreator(text)
                  store.dispatch(action)
            }    
            return  <MyPosts 
            posts={store.getState().profilePage.posts}
            updateNewPostTex={onPostChange} 
            addPost={addPost} 
            newPostText={store.getState().profilePage.newPostText}/>}
            }
         
     </StoreContext.Consumer> 
     )
}

export default MyPostsContainer