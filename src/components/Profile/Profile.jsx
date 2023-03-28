import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</div>
	)
}
