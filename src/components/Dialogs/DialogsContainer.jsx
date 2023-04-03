import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return { dialogsPage: state.dialogsPage }
}

let mapDispatchToProps = dispatch => {
	return {
		updateNewMessageBody: text => {
			dispatch(updateNewMessageBodyActionCreator(text))
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator())
		},
	}
}

export const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Dialogs)
