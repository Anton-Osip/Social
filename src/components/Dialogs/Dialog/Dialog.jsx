import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialog.module.css'

export function Dialog(props) {
	return (
		<div>
			<NavLink to={`/dialogs/${props.name}`} activeClassName={styles.active__name}>
				{props.name}
			</NavLink>
		</div>
	)
}
