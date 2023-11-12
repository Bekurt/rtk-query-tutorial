import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

interface Post {
	id: string
	title: string
	content: string
	user: string
}

const initialState: Post[] = [
	{ id: '1', title: 'First Post', content: 'Hello!', user: '0' },
	{ id: '2', title: 'Second Post', content: 'More text', user: '1' },
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: {
			reducer: (state, action: PayloadAction<Post>) => {
				state.push(action.payload)
			},
			prepare: (title, content, userId) => {
				return { payload: { id: nanoid(), title, content, user: userId } }
			},
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
