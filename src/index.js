import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { store } from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './StoreContext'

let rerenderEntireTree = state => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root'),
	)
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
	rerenderEntireTree(store.getState())
})

serviceWorker.unregister()
