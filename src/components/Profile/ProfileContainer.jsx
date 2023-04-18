import React, { Component } from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 23343
		if (!userId) userId = this.props.myId
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		myId: state.auth.id,
		status: state.profilePage.status,
	}
}

export default compose(
	connect(
		mapStateToProps,
		{ getUserProfile, getStatus, updateStatus },
	),
	withRouter,
	withAuthRedirect,
)(ProfileContainer)
