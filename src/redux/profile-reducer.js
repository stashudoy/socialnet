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
        case ADD_POST: {
            let newPost = {id:5,
                message: state.newPostText,
                likesCount: 0
            }    
            let stateCopy = {...state}
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy  // возвращаем преобразованный state
        }       
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state} // spred operator build copy of state object
            stateCopy.newPostText = action.newText
            return stateCopy  // возвращаем преобразованный state, вместо break используем return тогда case дальше не проваливается
        }    
        default:
            return state
             

    }    
}

export const addPostActionCreator = () => ({  type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer