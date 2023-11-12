import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/postsSlice'
import { userReducer } from './slices/usersSlice'

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		users: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
