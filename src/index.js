import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { store } from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App store={store} />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)

serviceWorker.unregister()
