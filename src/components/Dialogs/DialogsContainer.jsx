import React from 'react'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state'
import { Dialogs } from './Dialogs'

export function DialogsContainer(props) {
	let state = props.store.getState().dialogsPage

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageActionCreator())
	}
	let onMassegeChange = text => {
		props.store.dispatch(updateNewMessageBodyActionCreator(text))
	}

	return (
		<Dialogs
			updateNewMessageBody={onMassegeChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state}
		/>
	)
}
