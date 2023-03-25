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

const App = () => {
	let linksElements = [
		{ id: 1, link: 'Профиль', href: '/profile' },
		{ id: 2, link: 'Сообщения', href: '/dialogs' },
		{ id: 3, link: 'Новости', href: '/news' },
		{ id: 4, link: 'Музыка', href: '/music' },
		{ id: 5, link: 'Найти друзей', href: '/users' },
		{ id: 6, link: 'Настройки', href: '/settings' },
		{ id: 7, link: 'Друзья', href: '/frends' },
	]
	let FrendLink = [{ id: 1, name: 'Anton' }, { id: 2, name: 'Viktor' }, { id: 3, name: 'Valera' }]
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar links={linksElements} frends={FrendLink} />
				<div className='content'>
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
