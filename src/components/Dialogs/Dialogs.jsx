import React from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

export function Dialogs(props) {
	let newMessageBody = props.dialogsPage.newMessageBody
	const dialogsElements = props.dialogsPage.dialogs.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.dialogsPage.messages.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))

	let onSendMessageClick = event => {
		event.preventDefault()
		props.sendMessage()
	}
	let onMassegeChange = e => {
		let text = e.target.value
		props.updateNewMessageBody(text)
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
				<button type='submit' className={styles.dialogs__btn} onClick={onSendMessageClick}>
					Send
				</button>
			</form>
		</div>
	)
}
