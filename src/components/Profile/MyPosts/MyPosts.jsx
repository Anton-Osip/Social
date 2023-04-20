import React from 'react'
import uuid from 'react-uuid'
import styles from './MyPosts.module.css'
import Post from './Posts/Post'
import { AddNewPostFormRedux } from './AddNewPostForm/AddNewPostForm'

export default function MyPosts(props) {
	let postElem = props.posts.map(item => (
		<Post message={item.message} likesCount={item.likesCount} key={uuid()} />
	))

	let onAddPost = value => {
		props.addPost(value.newPostText)
	}

	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<AddNewPostFormRedux onSubmit={onAddPost} />
			</div>
			<div className={styles.posts}>{postElem}</div>
		</div>
	)
}
