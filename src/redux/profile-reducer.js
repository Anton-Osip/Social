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
		case ADD_POST: {
			let newMessage = { id: state.posts.length + 1, message: state.newPostText, likesCount: '0' }
			let stateCopy = { ...state }
			stateCopy.posts = [...state.posts]
			stateCopy.posts.push(newMessage)
			stateCopy.newPostText = ''
			return stateCopy
		}

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state }
			stateCopy.newPostText = action.newText
			return stateCopy
		}

		default:
			return state
	}
}
