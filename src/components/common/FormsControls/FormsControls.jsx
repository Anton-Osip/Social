import React from 'react'
import styles from './FormsControls.module.css'


export function Textarea({ input, meta, ...props }) {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.form_control_textArea + ' ' + (hasError ? styles.error : '')}>
			<textarea {...input} {...props} />
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export function Input({ input, meta, ...props }) {
	const hasError = meta.touched && meta.error
	return (
		<div className={hasError ? styles.error : ''}>
			<input {...input} {...props} />
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}
