import React from 'react'
import styles from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.form_control_textArea + ' ' + (hasError ? styles.error : '')}>
			{props.children}
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export function Textarea(props) {
	const { input, meta, child, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export function Input(props) {
	const { input, meta, child, ...restProps } = props

	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}
