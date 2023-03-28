import React from 'react'
import styles from './Post.module.css'

import ava from '../../../../images/ava.jpeg'
import like from '../../../../images/like.png'

export default function Post(props) {
	return <div className={styles.post}>
			<div className={styles.post__ava}>
				<img src={ava} alt='ava' className={styles.post__avaImg} />
			</div>
			<p className={styles.post__text}>{props.message}</p>
			<div className={styles.post__like}>
				<img src={like} alt='like' />
				<span className={styles.post__likeNum}>{props.likesCount}</span>
			</div>
		</div>
}
