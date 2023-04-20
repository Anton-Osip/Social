import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './AddNewPostForm.module.css'

export default function AddNewPostForm(props) {
	return (
		<form className={styles.newPost__form} onSubmit={props.handleSubmit}>
			<Field name='newPostText' component='textarea' className={styles.newPost__input} />
			<button type='submit' className={styles.newPost__btn}>
				Send
			</button>
		</form>
	)
}

export const AddNewPostFormRedux = reduxForm({ form: 'newPostText' })(AddNewPostForm)
