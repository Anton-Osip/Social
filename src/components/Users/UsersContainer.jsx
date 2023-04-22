import React, { Component } from 'react'
import styles from './UsersContainer.module.css'
import { Users } from './Users'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	unfollow,
	toggleIsFollowingProgress,
	getUsers,
} from '../../redux/users-reducer'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { Preloader } from '../common/Preloader/Preloader'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
		// this.props.setCurrentPage(pageNumber)
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

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleIsFollowingProgress,
		getUsers,
	}),
)(UsersContainer)
