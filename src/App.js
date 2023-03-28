import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'

const App = props => {
	return <BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.navbarPage} />
				<div className='content'>
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
}

export default App
