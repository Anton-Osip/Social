import React from 'react'
import styles from './Message.module.css'

export function Message(props) {
	return (
		<div
			className={
				props.my
					? `${styles.dialogs__message}  ${styles.dialogs__myMessage}`
					: `${styles.dialogs__message}`
			}
		>
			<p className={styles.dialogs__text}>{props.message}</p>
		</div>
	)
}
