import { rerenderEntireTree } from "../render"


 let state = {

    profilePage:{    
    posts:[
        {id:1, message: 'Hello, tester!', likesCount: 10},
        {id:1, message: 'We are pro!', likesCount: 20}
      ],
    newPostText: 'testerX'    
    },
     
    messagesPage:{    
    dialogs: [
        {id: 1, name:'Dimych'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sasha'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Valera'}
      ] ,
      messages:  [
          {id: 1, message: 'Hello, tester!'},
          {id: 1, message: 'How are you?'},
          {id: 1, message: 'Yo!'}
        ]}
  }

  window.state = state

  export let addPost = () => {
    let newPost = {id:5, message: state.profilePage.newPostText, likesCount: 0}
    
   state.profilePage.posts.push(newPost)
   state.profilePage.newPostText='';
   rerenderEntireTree(state)  // перекидываем отсюда state в файл render.js
  }


  export let updateNewPostText = (newText) => {
      
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)  // перекидываем отсюда state в файл render.js
  }


  export default state