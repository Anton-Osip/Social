import React from 'react'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
// import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export function Profile(props) {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	)
}
