import React, { Component } from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'






const Dialogs = (props) => {



let dialogsElements = props.dialogs.map(el => (<DialogItem name={el.name} id={el.id}/>))




 let messagesElements = props.messages.map((el) => (<Message message={el.message}/> )) 
  
    return (
      <div className={s.dialogs} >
          <div className={s.dialogsItems}>
            {dialogsElements}

            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/> */}
          </div>
          <div className={s.messages}>
           {messagesElements}
           
          </div>
      </div>
    )
  }


export default Dialogs