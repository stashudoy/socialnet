import { combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReduser from './users-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarReducer: sidebarReducer,
    usersPage: usersReduser                  // usersPage will get service via userReducer 
} )

let store = createStore(reducers)

window.store = store

export default store
