import React, { Component } from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'





const Dialogs = (props) => {


let state = props.store.getState().messagesPage
let dialogsElements = state.dialogs.map(el => (<DialogItem name={el.name} id={el.id}/>))
let messagesElements = state.messages.map((el) => (<Message message={el.message}/> )) 
let newMessageBody = state.newMessageBody

let onSendMessageClick = () => { props.store.dispatch(sendMessageCreator()) }

let onNewMessageChange = (e) => {
            let body = e.target.value  //ref по возможности не используем
            props.store.dispatch(updateNewMessageBodyCreator(body))                       
      }



    return (
      <div className={s.dialogs} >
          <div className={s.dialogsItems}>
            {dialogsElements}

            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/> */}
          </div>
          <div className={s.messages}>
           <div>{messagesElements}</div>
            <div >
              <div><textarea value={newMessageBody}
                             onChange={onNewMessageChange}
                             placeholder='Enter your message'>
                  </textarea>
              </div>
              <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
          </div>
      </div>
    )
  }


export default Dialogs