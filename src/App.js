import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Navbar } from './components/Navbar/Navbar'
import Login from './components/Login/Login'

const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />

			<div className='content'>
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/login' render={() => <Login />} />

				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>
	)
}

export default App
