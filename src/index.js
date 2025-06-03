import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  state, {addPost, subscribe} from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
);}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)