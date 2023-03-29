const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
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
			newMessageText: 'aaa',
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
		if (action.type === ADD_POST) {
			let newMessage = {
				id: this._state.profilePage.posts.length + 1,
				message: this._state.profilePage.newPostText,
				likesCount: '0',
			}
			this._state.profilePage.posts.push(newMessage)
			this._state.profilePage.newPostText = ''
			this._rerenderEntireTree(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText
			this._rerenderEntireTree(this._state)
		} else if (action.type === ADD_MESSAGE) {
			let newMessages = {
				id: this._state.dialogsPage.messages.length + 1,
				message: this._state.dialogsPage.newMessageText,
				my: true,
			}
			this._state.dialogsPage.messages.push(newMessages)
			this._state.dialogsPage.newMessageText = ''
			this._rerenderEntireTree(this._state)
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.newText
			this._rerenderEntireTree(this._state)
		}
	},
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: newText,
})

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = newText => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: newText,
})

window.store = store
