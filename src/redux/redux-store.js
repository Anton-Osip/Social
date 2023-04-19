import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer '
import { navbarReducer } from './navbar-reducer'
import { profileReducer } from './profile-reducer'
import { userReducer } from './users-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth-reducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navbarPage: navbarReducer,
	usersPage: userReducer,
	auth: authReducer,
	form: formReducer,
})

export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
