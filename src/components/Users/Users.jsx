import React, { Component } from 'react'
import styles from './Users.module.css'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import userImg from '../../images/ava.jpeg'
import axios from 'axios'

export class Users extends Component {
	componentDidMount = () => {
		if (this.props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.props.setUsers(response.data.items)
			})
		}
	}

	render() {
		return (
			<div className={styles.users}>
				<h1 className={styles.users__title}>Users</h1>
				<div className={styles.users__inner}>
					{this.props.users.map(user => (
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
										className={styles.user__follow}
										onClick={() => {
											this.props.follow(user.id)
										}}
									>
										Follow
									</button>
								) : (
									<button
										className={styles.user__follow}
										onClick={() => {
											this.props.unfollow(user.id)
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
}
