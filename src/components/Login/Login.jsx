import React from 'react'
import styles from './login.module.css'
import { LoginReduxForm } from './LoginForm/LoginForm'

export function Login(props) {
	const onSubmit = formData => {
		console.log(formData)
	}
	return (
		<div className={styles.login}>
			<h1 className={styles.login__title}>LOGIN</h1>
			<div className={styles.loginForm}>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}
