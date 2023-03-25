import React from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'

import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

export function Dialogs() {
	let dialogs = [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Viktor' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Sveta' },
		{ id: 5, name: 'Pasha' },
	]
	let messages = [
		{ id: 1, message: 'I am a normal pBLablabl I can have text and						everything', my: false },
		{ id: 2, message: 'I am a normal pBLablabl I can have text and						everything', my: true },
		{ id: 3, message: 'I am a normal pBLablabl I can have text and						everything', my: false },
		{ id: 4, message: 'I am a normal pBLablabl I can have text and						everything', my: true },
	]
	const dialogsElements = dialogs.map(dialog => <Dialog name={dialog.name} key={uuid()} />)

	const messagesElements = messages.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))
	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>{dialogsElements}</div>
				<div className={styles.dialogs__messages}>{messagesElements}</div>
			</div>
		</div>
	)
}
