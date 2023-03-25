import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'

export function Profile() {
	return (
		<div>
			<div>
				<img
					className={styles.profile__img}
					src='https://assets-global.website-files.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg'
					alt=''
				/>
			</div>
			<div>ava + description</div>
			<div>
				<MyPosts />
			</div>
		</div>
	)
}
