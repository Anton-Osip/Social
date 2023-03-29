import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, updateNewPostText, addMessages, updateNewMessageText } from './redux/state.js'

export let rerenderEntireTree = state => {
	ReactDOM.render(
		<App
			state={state}
			addPost={addPost}
			updateNewPostText={updateNewPostText}
			addMessages={addMessages}
			updateNewMessageText={updateNewMessageText}
		/>,
		document.getElementById('root'),
	)
}
