import { connect } from 'react-redux'
import { Users } from './Users'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
}

let MapDispatchToProps = dispatch => {
	return { follow: userId => {
			dispatch(followAC(userId))
		}, unfollow: userId => {
			dispatch(unfollowAC(userId))
		}, setUsers: users => {
			dispatch(setUsersAC(users))
		}, setCurrentPage: currentPage => {
			dispatch(setCurrentPageAC(currentPage))
		}, setTotalUsersCount: totalUsersCount => {
			dispatch(setTotalUsersCountAC(totalUsersCount))
		} }
}

export let UsersContainer = connect(
	mapStateToProps,
	MapDispatchToProps,
)(Users)
