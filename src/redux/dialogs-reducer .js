const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessages = { id: state.messages.length + 1, message: state.newMessageBody, my: true }
			state.messages.push(newMessages)
			state.newMessageBody = ''
			return state

		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state

		default:
			return state
	}
}
