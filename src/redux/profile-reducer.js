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
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: '0',
			}
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost],
			}
		}

		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			}
		}

		default:
			return state
	}
}
