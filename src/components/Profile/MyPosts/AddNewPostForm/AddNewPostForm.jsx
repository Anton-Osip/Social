import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './AddNewPostForm.module.css'
import { required, maxLength15 } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'

export default function AddNewPostForm(props) {
	return (
		<form className={styles.newPost__form} onSubmit={props.handleSubmit}>
			<Field
				validate={[required, maxLength15]}
				name='newPostText'
				component={Textarea}
				className={styles.newPost__input}
			/>
			<button type='submit' className={styles.newPost__btn}>
				Send
			</button>
		</form>
	)
}

export const AddNewPostFormRedux = reduxForm({ form: 'newPostText' })(AddNewPostForm)
