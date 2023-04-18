import React from 'react'
import styles from './Dialogs.module.css'
import uuid from 'react-uuid'
import { Message } from './Message/Message'
import { NavLink, Redirect } from 'react-router-dom'

export function Dialogs(props) {
	let newMessageBody = props.dialogsPage.newMessageBody

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
	if (!props.isAuth) return <Redirect to={'/login'} />

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>
					<div>
						<NavLink to={`/dialogs/Anton`} activeClassName={styles.active__name}>
							Anton
						</NavLink>
					</div>
					<div>
						<NavLink to={`/dialogs/Viktor`} activeClassName={styles.active__name}>
							Viktor
						</NavLink>
					</div>
					<div>
						<NavLink to={`/dialogs/Valera`} activeClassName={styles.active__name}>
							Valera
						</NavLink>
					</div>
					<div>
						<NavLink to={`/dialogs/Sveta`} activeClassName={styles.active__name}>
							Sveta
						</NavLink>
					</div>
					<div>
						<NavLink to={`/dialogs/Pasha`} activeClassName={styles.active__name}>
							Pasha
						</NavLink>
					</div>
				</div>
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
