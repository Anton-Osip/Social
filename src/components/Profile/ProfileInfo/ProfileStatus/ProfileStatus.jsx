import React, { Component } from 'react'

export default class ProfileStatus extends Component {
	state = { editeMode: false }

	activateEditMode = () => {
		this.setState({ editeMode: true })
	}
	deaactivateEditMode = () => {
		this.setState({ editeMode: false })
	}

	render() {
		return (
			<div>
				{!this.state.editeMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				)}
				{this.state.editeMode && (
					<div>
						<input value={this.props.status} autoFocus onBlur={this.deaactivateEditMode} />
					</div>
				)}
			</div>
		)
	}
}
