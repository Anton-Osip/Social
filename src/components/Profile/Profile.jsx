import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
// import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer  />
		</div>
	)
}
