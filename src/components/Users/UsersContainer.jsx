import React, { Component } from 'react'
import styles from './UsersContainer.module.css'
import { Users } from './Users'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	unfollow,
	toggleIsFetching,
	toggleIsFollowingProgress,
} from '../../redux/users-reducer'
import { Preloader } from '../Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = p => {
		this.props.setCurrentPage(p)
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
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
						toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
						followingInProgress={this.props.followingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress,
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
		toggleIsFollowingProgress,
	},
)(UsersContainer)
