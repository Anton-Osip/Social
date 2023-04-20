import React from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'
import { Message } from './Message/Message'
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm'
import { Dialog } from './Dialog/Dialog'

export function Dialogs(props) {
	const dialogsElements = props.dialogsPage.dialogs.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.dialogsPage.messages.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))

	const addNewMessage = value => {
		console.log(value.newMessageBody)
		props.sendMessage(value.newMessageBody)
	}

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>{dialogsElements}</div>
				<div className={styles.dialogs__messages}>{messagesElements}</div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	)
}
