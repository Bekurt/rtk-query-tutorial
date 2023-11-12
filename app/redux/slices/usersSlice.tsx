import { createSlice } from '@reduxjs/toolkit'

interface user {
	id: string
	name: string
}

const initialState: user[] = [
	{ id: '0', name: 'Tizio' },
	{ id: '1', name: 'Caio' },
	{ id: '2', name: 'Sempronio' },
]

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
})

export const userReducer = userSlice.reducer
