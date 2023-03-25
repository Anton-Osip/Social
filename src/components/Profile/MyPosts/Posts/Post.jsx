import React from 'react'
import styles from './Post.module.css'

import ava from '../../../../images/ava.jpeg'
import like from '../../../../images/like.png'

export default function Post() {
	return (
		<div className={styles.post}>
			<div className={styles.post__ava}>
				<img src={ava} alt='ava' className={styles.post__avaImg} />
			</div>
			<p className={styles.post__text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima nostrum, deleniti
				adipisci quibusdam est, quaerat necessitatibus veniam rerum dicta nobis illo a? Corrupti,
				officia voluptate ea harum magni temporibus.
			</p>
			<div className={styles.post__like}>
				<img src={like} alt='like' />
				<span className={styles.post__likeNum}>55</span>
			</div>
		</div>
	)
}
