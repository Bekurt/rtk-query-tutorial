import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Post {
	id: string
	title: string
	content: string
}

const initialState: Post[] = [
	{ id: '1', title: 'First Post', content: 'Hello!' },
	{ id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action: PayloadAction<Post>) => {
			state.push(action.payload)
		},
		updatePost: (state, action: PayloadAction<Post>) => {
			const { id, title, content } = action.payload
			const existingPost = state.find((post) => post.id === id)
			if (existingPost) {
				existingPost.title = title
				existingPost.content = content
			}
		},
	},
})

export const { addPost, updatePost } = postsSlice.actions
export const postsReducer = postsSlice.reducer
