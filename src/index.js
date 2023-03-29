import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { state, subscribe } from './redux/state.js'
import App from './App'
import { addPost, updateNewPostText, addMessages, updateNewMessageText } from './redux/state.js'

let rerenderEntireTree = () => {
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

subscribe(rerenderEntireTree)
rerenderEntireTree(state)

serviceWorker.unregister()
