import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'


const DialogsContainer = (props) => {
//34:47

let state = props.store.getState().messagesPage

let onSendMessageClick = () => { props.store.dispatch(sendMessageCreator()) }

let onNewMessageChange = (body) => {            
            props.store.dispatch(updateNewMessageBodyCreator(body))         

}
    return (
      <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} 
      messagesPage = {state}
      />
    )
  }


export default DialogsContainer