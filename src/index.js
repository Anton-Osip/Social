import * as serviceWorker from './serviceWorker'
import { state } from './redux/state.js'
import { rerenderEntireTree } from './render'

rerenderEntireTree(state)

serviceWorker.unregister()
