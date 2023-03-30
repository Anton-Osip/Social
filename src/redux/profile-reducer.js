const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	posts: [
		{ id: 1, message: 'Hey, why nobody love me?', likesCount: '10' },
		{ id: 2, message: "It's our new program! Hey!", likesCount: '55' },
	],
	newPostText: '',
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newMessage = { id: state.posts.length + 1, message: state.newPostText, likesCount: '0' }
			state.posts.push(newMessage)
			state.newPostText = ''
			return state

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state

		default:
			return state
	}
}
