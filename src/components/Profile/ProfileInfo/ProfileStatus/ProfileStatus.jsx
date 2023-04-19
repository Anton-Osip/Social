import React, { Component } from 'react'
import styles from './ProfileStatus.module.css'

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
			<div className={styles.profileStatus}>
				{!this.state.editeMode && (
					<div className={styles.statusText}>
						<span onDoubleClick={this.activateEditMode}>
							<small>Status: </small>
							{this.props.status || '------'}
						</span>
					</div>
				)}
				{this.state.editeMode && (
					<div>
						<input
							className={styles.statusInput}
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
