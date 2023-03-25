import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export function Profile() {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPosts />
			</div>
		</div>
	)
}
