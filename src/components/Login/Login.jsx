import React from 'react'
import styles from './login.module.css'
import { LoginReduxForm } from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

function Login(props) {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
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
const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
