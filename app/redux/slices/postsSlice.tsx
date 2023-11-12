import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

interface Post {
	id: string
	date: string
	title: string
	content: string
	user: string
}

const initialState: Post[] = [
	{ id: '1', date: '2023-06-12T16:24:00.859Z', title: 'First Post', content: 'Hello!', user: '0' },
	{ id: '2', date: '2023-11-12T12:24:00.859Z', title: 'Second Post', content: 'More text', user: '1' },
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
				return {
					payload: {
						id: nanoid(),
						date: new Date().toISOString(),
						title,
						content,
						user: userId,
					},
				}
			},
		},
		updatePost: (state, action: PayloadAction<{ id: string; title: string; content: string }>) => {
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
