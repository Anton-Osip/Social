import { addPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
	}
}
let mapDispathToProps = dispatch => {
	return {
		addPost: newPostText => {
			dispatch(addPostActionCreator(newPostText))
		},
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
