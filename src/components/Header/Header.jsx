import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export function Header(props) {
	return (
		<header className={styles.header}>
			<img
				className={styles.header__img}
				src='https://cryptologos.cc/logos/aave-aave-logo.png'
				alt='Logo'
			/>
			<div className={styles.loginBlock}>
				{props.isAuth ? (
					<div className={styles.login__block}>
						<p>{props.login} </p>
						<button onClick={props.logout} className={styles.logout__btn}>Logout</button>
					</div>
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</header>
	)
}
