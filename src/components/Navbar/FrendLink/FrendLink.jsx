import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './FrendLink.module.css'
import ava from '../../../images/ava.jpeg'

export function FrendLink(props) {
	return (
		<NavLink to={'/dialogs/' + props.name} className={styles.frend}>
			<div className={styles.ava}>
				<img src={ava} alt='ava' className={styles.ava__img} />
			</div>
			{props.name}
		</NavLink>
	)
}
