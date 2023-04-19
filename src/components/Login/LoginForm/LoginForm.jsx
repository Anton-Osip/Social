import React from 'react'
import styles from './loginForm.module.css'
import { Field, reduxForm } from 'redux-form'

function LoginForm(props) {
	return (
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<div className={styles.inputWrapper}>
				<Field
					component={'input'}
					name={'login'}
					className={styles.input}
					type='text'
					placeholder='Login'
				/>
			</div>
			<div className={styles.inputWrapper}>
				<Field
					component={'input'}
					name={'password'}
					className={styles.input}
					type='password'
					placeholder='Password'
				/>
			</div>
			<div className={styles.checkboxWrapper}>
				<Field
					component={'input'}
					name={'rememberMe'}
					className={styles.checkbox}
					type='checkbox'
					id='formCheckbox'
				/>
				<label className={styles.label} htmlFor='formCheckbox'>
					Remember me
				</label>
			</div>
			<div>
				<button type='submit' className={styles.btn}>
					Login
				</button>
			</div>
		</form>
	)
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
