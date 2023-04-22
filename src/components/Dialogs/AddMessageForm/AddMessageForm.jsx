import React from 'react'
import styles from './AddMessageForm.module.css'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLength15 } from '../../../utils/validators/validators'

function AddMessageForm(props) {
	return (
		<form className={styles.dialogs__form} onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				name='newMessageBody'
				placeholder='Enter your message'
				className={styles.dialogs__input}
				validate={[required, maxLength15]}
			/>
			<button type='submit' className={styles.dialogs__btn}>
				Send
			</button>
		</form>
	)
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
