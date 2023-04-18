import React, { Component } from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 23343
		if (!userId) userId = this.props.myId
		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = state => {
	return { profile: state.profilePage.profile, myId: state.auth.id }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(
	mapStateToProps,
	{ getUserProfile },
)(WithUrlDataContainerComponent)
