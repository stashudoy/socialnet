const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {    
    posts:[
        {id:1, message: 'Hello, tester!', likesCount: 10},
        {id:1, message: 'We are pro!', likesCount: 20}
      ],
    newPostText: 'testerX' }

export const profileReducer = (state = initialState, action) => {
    

    switch(action.type) {
        case ADD_POST: 
            let newPost = {id:5, message: state.newPostText, likesCount: 0}    
            state.posts.push(newPost)
            state.newPostText='';
            return state  // возвращаем преобразованный state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state  // возвращаем преобразованный state, вместо break используем return тогда case дальше не проваливается
        default:
            return state    

    }


    // if(action.type===ADD_POST){
    //     let newPost = {id:5, message: state.newPostText, likesCount: 0}
    
    //     state.posts.push(newPost)
    //     state.newPostText='';
        
    //   } else if (action.type ===  UPDATE_NEW_POST_TEXT){
    //     state.newPostText = action.newText
        
    //   } 
    
    
}

export const addPostActionCreator = () => ({  type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer