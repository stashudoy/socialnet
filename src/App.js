import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {BrowserRouter,Routes, Route } from 'react-router-dom'


//          <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} newMessgeBody={props.state.newMessgeBody} store={props.store}/>} />
//profilePage={props.store.getState().profilePage} dispatch={props.dispatch}/>} 

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer store={props.store}/>} />
          <Route path='/profile' element={<Profile  store={props.store} />}/>
        </Routes>



        </div>

      </div>
    </BrowserRouter>

  )
}

export default App
