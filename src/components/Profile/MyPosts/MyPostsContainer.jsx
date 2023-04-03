import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}
let mapDispathToProps = dispatch => {
	return {
		updateNewPostText: text => {
			dispatch(updateNewPostTextActionCreator(text))
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		},
	}
}

export const MyPostsContainer = connect(
	mapStateToProps,
	mapDispathToProps,
)(MyPosts)
