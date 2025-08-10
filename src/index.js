import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  store from './redux/redux-store'
import {Provider} from './StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);}

rerenderEntireTree()

store.subscribe(() => {
  //let state = store.getState()  // getState в redux есть по умолчанию
  rerenderEntireTree()
})