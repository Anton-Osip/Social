import React from 'react'
import uuid from 'react-uuid'
import styles from './MyPosts.module.css'
import Post from './Posts/Post'

export default function MyPosts(props) {

	let postElem = props.posts.map((item)=>(<Post message={item.message} likeCount={item.likeCount} key={uuid()}/>))
	return <div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input type='text' className={styles.newPost__input} />
					<button type='submit' className={styles.newPost__btn}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postElem}</div>
		</div>
}
