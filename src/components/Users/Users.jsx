import React from 'react'
import styles from './Users.module.css'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import userImg from '../../images/ava.jpeg'

export function Users(props) {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={styles.users}>
			<h1 className={styles.users__title}>Users</h1>
			<div className={styles.users__navigations}>
				{pages.map(page => (
					<div
						className={
							props.currentPage === page
								? styles.users__navigationsItemActive
								: styles.users__navigationsItem
						}
						key={uuid()}
						onClick={e => {
							props.onPageChanged(page)
						}}
					>
						{page}
					</div>
				))}
			</div>
			<div className={styles.users__inner}>
				{props.users.map(user => (
					<div key={uuid()} className={styles.user}>
						<div className={styles.user__left}>
							<NavLink to={`/profile/${user.id}`} className={styles.user__img_block}>
								<img
									className={styles.user__img}
									src={user.photos.small != null ? user.photos.small : userImg}
									alt={user.name}
								/>
							</NavLink>
							{!user.followed ? (
								<button
									disabled={props.followingInProgress.some(id => id === user.id)}
									className={styles.user__follow}
									onClick={() => {
										props.follow(user.id)
									}}
								>
									Follow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(id => id === user.id)}
									className={styles.user__follow}
									onClick={() => {
										props.unfollow(user.id)
									}}
								>
									Unfollow
								</button>
							)}
						</div>
						<div className={styles.user__right}>
							<div className={styles.user__info}>
								<h4 className={styles.user__name}>{user.name}</h4>
								<p className={styles.user__status}>{user.status}</p>
							</div>
							<div className={styles.user__location}>
								<p className={styles.user__countru}>Беларусь</p>
								<p className={styles.user__city}>Минск</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
