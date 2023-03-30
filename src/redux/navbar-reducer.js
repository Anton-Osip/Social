let initialState = {
	linksElements: [
		{ id: 1, link: 'Профиль', href: '/profile' },
		{ id: 2, link: 'Сообщения', href: '/dialogs' },
		{ id: 3, link: 'Новости', href: '/news' },
		{ id: 4, link: 'Музыка', href: '/music' },
		{ id: 5, link: 'Найти друзей', href: '/users' },
		{ id: 6, link: 'Настройки', href: '/settings' },
		{ id: 7, link: 'Друзья', href: '/frends' },
	],
	FrendLink: [{ id: 1, name: 'Anton' }, { id: 2, name: 'Viktor' }, { id: 3, name: 'Valera' }],
}
export const navbarReducer = (state = initialState, action) => {
	return state
}
