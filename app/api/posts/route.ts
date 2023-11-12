import { post } from '@/app/redux/slices/postsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
	const data = JSON.stringify([
		{ id: '1', date: '2023-06-12T16:24:00.859Z', title: 'First Post', content: 'Hello!', user: '0' },
		{ id: '2', date: '2023-11-12T12:24:00.859Z', title: 'Second Post', content: 'More text', user: '1' },
	])

	return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
	const requestBody = await request.json()
	const data = await requestBody

	const fullPost: post = {
		id: nanoid(),
		date: new Date().toISOString(),
		title: data.title,
		content: data.content,
		user: data.user,
	}
	return NextResponse.json(JSON.stringify(fullPost))
}
