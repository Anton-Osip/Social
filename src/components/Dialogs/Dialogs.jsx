import React, { createRef } from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'

import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state'

export function Dialogs(props) {
	let state = props.store.getState().dialogsPage
	let newMessageBody = state.newMessageBody
	const dialogsElements = state.dialogs.map(dialog => <Dialog name={dialog.name} key={uuid()} />)

	const messagesElements = state.messages.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))

	let addMasseg = event => {
		event.preventDefault()
		let action = sendMessageActionCreator()
		props.store.dispatch(action)
	}
	let onMassegeChange = e => {
		let text = e.target.value
		let action = updateNewMessageBodyActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>{dialogsElements}</div>
				<div className={styles.dialogs__messages}>{messagesElements}</div>
			</div>
			<form className={styles.dialogs__form}>
				<textarea className={styles.dialogs__input} value={newMessageBody} onChange={onMassegeChange} />
				<button type='submit' className={styles.dialogs__btn} onClick={addMasseg}>
					Send
				</button>
			</form>
		</div>
	)
}
