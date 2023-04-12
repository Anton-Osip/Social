import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer '
import { navbarReducer } from './navbar-reducer'
import { profileReducer } from './profile-reducer'
import { userReducer } from './users-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navbarPage: navbarReducer,
	usersPage: userReducer,
})

export let store = createStore(reducers, composeWithDevTools())
