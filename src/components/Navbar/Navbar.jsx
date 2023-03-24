import React from 'react'
import styles from './Navbar.module.css'

export function Navbar() {
	return <nav className={styles.nav}>
			<div className={styles.item}>
				<a href='#aaa'>Profile</a>
			</div>
			<div className={`${styles.item} ${styles.activeLink}`}>
				<a href='#aaa'>Messages</a>
			</div>
			<div className={styles.item}>
				<a href='#aaa'>News</a>
			</div>
			<div className={styles.item}>
				<a href='#aaa'>Music</a>
			</div>
		</nav>
}
