import React, { Component } from 'react'
import styles from './UsersContainer.module.css'
import axios from 'axios'
import { Users } from './Users'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	unfollow,
	toggleIsFetching,
} from '../../redux/users-reducer'
import { Preloader } from '../Preloader/Preloader'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${
					this.props.pageSize
				}`,
				{
					withCredentials: true,
				},
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = p => {
		this.props.setCurrentPage(p)
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
				{
					withCredentials: true,
				},
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div className={styles.user__wrapper}>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						users={this.props.users}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
					/>
				)}
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

export default connect(
	mapStateToProps,
	{
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching,
	},
)(UsersContainer)
