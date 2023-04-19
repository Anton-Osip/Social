import React, { Component } from 'react'

export default class ProfileStatus extends Component {
	state = { editeMode: false, status: this.props.status }

	activateEditMode = () => {
		this.setState({ editeMode: true })
	}
	deaactivateEditMode = () => {
		this.setState({ editeMode: false })
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = event => {
		this.setState({ status: event.currentTarget.value })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}

	render() {
		return (
			<div>
				{!this.state.editeMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
					</div>
				)}
				{this.state.editeMode && (
					<div>
						<input
							value={this.state.status}
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deaactivateEditMode}
						/>
					</div>
				)}
			</div>
		)
	}
}
