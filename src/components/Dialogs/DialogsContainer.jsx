import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import {connect} from 'react-redux'
import React from 'react'


let mapStateToProps = (state) => {
  return {
    messagesPage:state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:() => {dispatch(sendMessageCreator())},              
    updateNewMessageBody:(body) => {dispatch(updateNewMessageBodyCreator(body))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer