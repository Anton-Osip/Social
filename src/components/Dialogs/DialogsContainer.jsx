import React from 'react'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state'
import { Dialogs } from './Dialogs'
import { StoreContext } from '../../StoreContext'

export function DialogsContainer() {
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogsPage

				let onSendMessageClick = () => {
					store.dispatch(sendMessageActionCreator())
				}
				let onMassegeChange = text => {
					store.dispatch(updateNewMessageBodyActionCreator(text))
				}
				return (
					<Dialogs
						updateNewMessageBody={onMassegeChange}
						sendMessage={onSendMessageClick}
						dialogsPage={state}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}
