import React from 'react'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<img
				className={styles.header__img}
				src='https://cryptologos.cc/logos/aave-aave-logo.png'
				alt='Logo'
			/>
		</header>
	)
}
