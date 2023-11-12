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
	},
})

export const { addPost } = postsSlice.actions
export const postsReducer = postsSlice.reducer
