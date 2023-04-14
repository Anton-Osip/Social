const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	posts: [
		{ id: 1, message: 'Hey, why nobody love me?', likesCount: '10' },
		{ id: 2, message: "It's our new program! Hey!", likesCount: '55' },
	],
	newPostText: '',
	profile: null,
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = { id: state.posts.length + 1, message: state.newPostText, likesCount: '0' }
			return { ...state, newPostText: '', posts: [...state.posts, newPost] }
		}

		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.newText }
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: newText,
})

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
