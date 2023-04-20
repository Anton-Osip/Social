import React from 'react'
import styles from './AddMessageForm.module.css'
import { Field, reduxForm } from 'redux-form'

function AddMessageForm(props) {
	return (
		<form className={styles.dialogs__form} onSubmit={props.handleSubmit}>
			<Field
				component={'textarea'}
				name='newMessageBody'
				placeholder='Enter your message'
				className={styles.dialogs__input}
			/>
			<button type='submit' className={styles.dialogs__btn}>
				Send
			</button>
		</form>
	)
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
