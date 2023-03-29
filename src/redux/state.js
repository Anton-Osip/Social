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
			newMessageText: '',
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
	getState() {
		return this._state
	},
	_rerenderEntireTree() {
		console.log('state was changed')
	},
	addPost(postMessage) {
		let newMessage = {
			id: this._state.profilePage.posts.length + 1,
			message: postMessage,
			likesCount: '0',
		}
		this._state.profilePage.posts.push(newMessage)
		this._state.profilePage.newPostText = ''
		this._rerenderEntireTree(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._rerenderEntireTree(this._state)
	},
	addMessages(postMessage) {
		let newMessages = {
			id: this._state.dialogsPage.messages.length + 1,
			message: postMessage,
			my: true,
		}
		this._state.dialogsPage.messages.push(newMessages)
		this._state.dialogsPage.newMessageText = ''
		this._rerenderEntireTree(this._state)
	},
	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText
		this._rerenderEntireTree(this._state)
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer
	},
}

window.store = store
