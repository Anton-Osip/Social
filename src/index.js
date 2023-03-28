import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { addPost, state } from './redux/state.js'
ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'))

serviceWorker.unregister()
