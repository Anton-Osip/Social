import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import MyPosts from './MyPosts'
import { StoreContext } from '../../../StoreContext'

export default function MyPostsContainer() {
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState()

				let addPost = () => {
					let action = addPostActionCreator()
					store.dispatch(action)
				}

				let onPostChange = text => {
					let action = updateNewPostTextActionCreator(text)
					store.dispatch(action)
				}
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}
