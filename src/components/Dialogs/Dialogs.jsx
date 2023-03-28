import React, { createRef } from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'

import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

export function Dialogs(props) {
	const dialogsElements = props.state.dialogs.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.state.messages.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))

	let newDialogsElement = createRef()

	let addMasseg = event => {
		event.preventDefault()
		console.log(newDialogsElement.current.value)
	}

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>{dialogsElements}</div>
				<div className={styles.dialogs__messages}>{messagesElements}</div>
			</div>
			<form className={styles.dialogs__form}>
				<textarea className={styles.dialogs__input} ref={newDialogsElement} />
				<button type='submit' className={styles.dialogs__btn} onClick={addMasseg}>
					Send
				</button>
			</form>
		</div>
	)
}
