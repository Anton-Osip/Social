import React, { createRef } from 'react'
import uuid from 'react-uuid'
import styles from './MyPosts.module.css'
import Post from './Posts/Post'

export default function MyPosts(props) {
	let postElem = props.posts.map(item => (
		<Post message={item.message} likesCount={item.likesCount} key={uuid()} />
	))

	let newPostElement = createRef()

	let addPost = event => {
		event.preventDefault()
		props.addPost(newPostElement)
	}

	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<textarea className={styles.newPost__input} ref={newPostElement} />
					<button type='submit' className={styles.newPost__btn} onClick={addPost}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postElem}</div>
		</div>
	)
}
