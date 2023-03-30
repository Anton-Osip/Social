import { dialogsReducer } from './dialogs-reducer '
import { navbarReducer } from './navbar-reducer'
import { profileReducer } from './profile-reducer'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hey, why nobody love me?', likesCount: '10' },
				{ id: 2, message: "It's our new program! Hey!", likesCount: '55' },
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Anton' },
				{ id: 2, name: 'Viktor' },
				{ id: 3, name: 'Valera' },
				{ id: 4, name: 'Sveta' },
				{ id: 5, name: 'Pasha' },
			],
			messages: [
				{ id: 1, message: 'I am a normal pBLablabl I can have text and						everything', my: false },
				{ id: 2, message: 'I am a normal pBLablabl I can have text and						everything', my: true },
				{ id: 3, message: 'I am a normal pBLablabl I can have text and						everything', my: false },
				{ id: 4, message: 'I am a normal pBLablabl I can have text and						everything', my: true },
			],
			newMessageBody: '',
		},
		navbarPage: {
			linksElements: [
				{ id: 1, link: 'Профиль', href: '/profile' },
				{ id: 2, link: 'Сообщения', href: '/dialogs' },
				{ id: 3, link: 'Новости', href: '/news' },
				{ id: 4, link: 'Музыка', href: '/music' },
				{ id: 5, link: 'Найти друзей', href: '/users' },
				{ id: 6, link: 'Настройки', href: '/settings' },
				{ id: 7, link: 'Друзья', href: '/frends' },
			],
			FrendLink: [{ id: 1, name: 'Anton' }, { id: 2, name: 'Viktor' }, { id: 3, name: 'Valera' }],
		},
	},
	_rerenderEntireTree() {
		console.log('state was changed')
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.navbarPage = navbarReducer(this._state.navbarPage, action)
		this._rerenderEntireTree(this._state)
	},
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: newText,
})

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyActionCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
})

window.store = store
