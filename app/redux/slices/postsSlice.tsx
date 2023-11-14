import { PayloadAction, createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface post {
	id: string
	date: string
	title: string
	content: string
	user: string
}

interface postState {
	posts: post[]
	status: 'idle' | 'loading' | 'success' | 'fail'
	error: string | null
}

const initialState: postState = {
	posts: [],
	status: 'idle',
	error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await fetch('/api/posts')
	const JSONdata = await response.json()
	const data = await JSONdata
	return JSON.parse(data)
})

export const addNewPost = createAsyncThunk(
	'posts/addNewPost',
	async (initialPost: { title: string; content: string; user: string }) => {
		const response = await fetch('/api/posts', { method: 'POST', body: JSON.stringify(initialPost) })
		const JSONdata = await response.json()
		const data = await JSONdata
		return JSON.parse(data)
	}
)

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: {
			reducer: (state, action: PayloadAction<post>) => {
				state.posts.push(action.payload)
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
			const existingPost = state.posts.find((post) => post.id === id)
			if (existingPost) {
				existingPost.title = title
				existingPost.content = content
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'success'
				state.posts = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'fail'
				state.error = action.error.message as string
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				state.posts.push(action.payload)
			})
	},
})

export const { addPost, updatePost } = postsSlice.actions
export const postsReducer = postsSlice.reducer

export const selectAllPosts = (state: RootState) => state.posts.posts
export const selectPostById = (state: RootState, postId: string) => {
	return state.posts.posts.find((post: post) => post.id === postId)
}
