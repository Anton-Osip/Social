import React from 'react'
import styles from './Users.module.css'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import userImg from '../../images/ava.jpeg'

export function Users(props) {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				fullName: 'Anton',
				status: 'i am a boss',
				location: { city: 'Minsk', country: 'Belarus' },
				followed: false,
			},
			{
				id: 2,
				fullName: 'Viktor',
				status: 'i am a boss',
				location: { city: 'Mosckow', country: 'Russia' },
				followed: true,
			},
			{
				id: 3,
				fullName: 'Anton',
				status: 'i am a boss too',
				location: { city: 'Minsk', country: 'Belarus' },
				followed: false,
			},
			{
				id: 4,
				fullName: 'Viktor',
				status: 'i am a boss too',
				location: { city: 'Mosckow', country: 'Russia' },
				followed: true,
			},
		])
	}

	return (
		<div className={styles.users}>
			<h1 className={styles.users__title}>Users</h1>
			<div className={styles.users__inner}>
				{props.users.map(user => (
					<div key={uuid()} className={styles.user}>
						<div className={styles.user__left}>
							<NavLink to={`/profile/${user.id}`} className={styles.user__img_block}>
								<img className={styles.user__img} src={userImg} alt={user.name} />
							</NavLink>
							{!user.followed ? (
								<button
									// disabled={props.followingInProgress.some(id => id === user.id)}
									className={styles.user__follow}
									onClick={() => {
										props.follow(user.id)
									}}
								>
									Follow
								</button>
							) : (
								<button
									// disabled={props.followingInProgress.some(id => id === user.id)}
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
								<h4 className={styles.user__name}>{user.fullName}</h4>
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
