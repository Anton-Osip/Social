import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Posts/Post'

export default function MyPosts() {
	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input type='text' className={styles.newPost__input} />
					<button type='submit' className={styles.newPost__btn}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>
				<Post />
			</div>
		</div>
	)
}
