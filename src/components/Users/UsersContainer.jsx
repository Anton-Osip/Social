import { connect } from 'react-redux'
import { Users } from './Users'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'

let mapStateToProps = state => {
	return { users: state.usersPage.users }
}

let MapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			dispatch(followAC(userId))
		},
		unfollow: userId => {
			dispatch(unfollowAC(userId))
		},
		setUsers: users => {
			dispatch(setUsersAC(users))
		},
	}
}

export let UsersContainer = connect(
	mapStateToProps,
	MapDispatchToProps,
)(Users)
