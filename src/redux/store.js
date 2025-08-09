import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"



let store = {
  _state: {

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
        ],
      newMessageBody: "hello"   
    },

    sidebar: {}

  },
  _callSubscriber() {    //Уведоми подписчика
    console.log('state changed')
  },
  getState(){
   
    return this._state
  },
  
   subscribe(observer){
    this._callSubscriber = observer
  },

   dispatch(action){   // dispatch - отправить, action - объект, который описывает действие
    //debugger

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.messagesPage = dialogsReducer(this._state.messagesPage,action)
     // this._state.sidebar = sidebarReducer(this._state.sidebar,action)

     this._callSubscriber(this._state)  // перекидываем отсюда state в файл render.js, уведомляем подписчика



   }

}







window.store = store

  export default store