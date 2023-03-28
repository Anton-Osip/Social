import React from 'react'
import styles from './Navbar.module.css'
import uuid from 'react-uuid'

import { Link } from './Link/Link'
import { FrendLink } from './FrendLink/FrendLink'

export function Navbar(props) {
	const linksElements = props.state.linksElements.map(link => (
		<Link link={link.link} href={link.href} key={uuid()} />
	))
	const frendsElements = props.state.FrendLink.map(frend => (
		<FrendLink key={uuid()} name={frend.name} />
	))
	return (
		<nav className={styles.nav}>
			{linksElements}
			<div className={styles.frends}>{frendsElements}</div>
		</nav>
	)
}
