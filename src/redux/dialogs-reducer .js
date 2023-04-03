const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
let initialState = {
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
}
export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessages = { id: state.messages.length + 1, message: state.newMessageBody, my: true }
			let stateCopy = { ...state }
			stateCopy.messages = [...state.messages]
			stateCopy.messages.push(newMessages)
			stateCopy.newMessageBody = ''
			return stateCopy
		}

		case UPDATE_NEW_MESSAGE_BODY: {
			let stateCopy = { ...state }
			stateCopy.newMessageBody = action.body
			return stateCopy
		}

		default:
			return state
	}
}
