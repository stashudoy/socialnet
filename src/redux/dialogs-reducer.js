const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {        
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
    }

 const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody='';
            state.messages.push({id: 6, message: body}) 
            return state 
        default:
            return state       
    }


}

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})     
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})   

export default dialogsReducer