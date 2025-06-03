import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import { addPost, updateNewPostText } from './redux/state'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} />} />
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
        </Routes>



        </div>

      </div>
    </BrowserRouter>

  )
}

export default App
