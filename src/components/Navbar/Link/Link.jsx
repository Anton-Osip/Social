import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

export  function Link(props) {
	return (
		<div className={styles.item}>
			<NavLink to={props.href} activeClassName={styles.activeLink}>
				{props.link}
			</NavLink>
		</div>
	)
}
