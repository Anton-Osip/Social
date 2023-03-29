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
		props.dispatch({ type: 'ADD-POST' })
	}

	let onPostChange = () => {
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value })
	}

	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<textarea
						className={styles.newPost__input}
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
					/>
					<button type='submit' className={styles.newPost__btn} onClick={addPost}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postElem}</div>
		</div>
	)
}
