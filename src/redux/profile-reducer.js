import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
	posts: [
		{ id: 1, message: 'Hey, why nobody love me?', likesCount: '10' },
		{ id: 2, message: "It's our new program! Hey!", likesCount: '55' },
	],
	newPostText: '',
	profile: null,
	status: '',
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
		case SET_STATUS: {
			return { ...state, status: action.status }
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
export const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => dispatch => {
	return profileAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data))
	})
}

export const getStatus = userId => dispatch => {
	return profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	})
}

export const updateStatus = status => dispatch => {
	return profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}
