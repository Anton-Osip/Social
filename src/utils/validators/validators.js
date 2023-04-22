export const required = value => {
	if (value) return undefined
	return 'Field is required'
}

const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
