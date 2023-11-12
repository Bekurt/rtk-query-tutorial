'use client'

import { useTypeDispatch, useTypeSelector } from '@/app/hooks/typedHooks'
import { addNewPost, addPost } from '@/app/redux/slices/postsSlice'
import { useState } from 'react'

export function AddPostForm() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')
	const [addRequestStatus, setAddRequestSTatus] = useState('idle')

	const dispatch = useTypeDispatch()

	const users = useTypeSelector((state) => state.users)
	const userOptions = users.map((user) => {
		return (
			<option key={user.id} value={user.id}>
				{user.name}
			</option>
		)
	})

	const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'
	const onSaveClicked = async () => {
		try {
			setAddRequestSTatus('pending')
			await dispatch(addNewPost({ title, content, user: userId })).unwrap()
			setTitle('')
			setContent('')
			setUserId('')
		} catch (err) {
			console.error('Failed to save the post: ', err)
		} finally {
			setAddRequestSTatus('idle')
		}
	}

	return (
		<section className='mb-20'>
			<h2 className='mb-3 text-2xl font-medium'>Add a New Post</h2>
			<form className='flex flex-col'>
				<div className='flex h-20 flex-col flex-wrap'>
					<label htmlFor='postTitle' className='mb-1 text-lg italic'>
						Post Title:
					</label>
					<input
						className='mb-2 w-80 rounded-md border bg-transparent px-2 py-1 focus:shadow-md focus:shadow-purple-600 focus:outline-none'
						type='text'
						id='postTitle'
						name='postTitle'
						value={title}
						onChange={(event) => {
							setTitle(event.target.value)
						}}
					/>
					<label htmlFor='postAuthor' className='mb-1 text-lg italic'>
						Author:
					</label>
					<select
						className='mb-2 w-80 rounded-md border bg-black px-2 py-1 font-sans'
						name='postAuthor'
						id='postAuthor'
						value={userId}
						onChange={(event) => setUserId(event.target.value)}>
						<option value=''></option>
						{userOptions}
					</select>
				</div>
				<label htmlFor='postContent' className='mb-1 text-lg italic'>
					Content:
				</label>
				<textarea
					className='mb-4 min-h-[80px] w-4/5 rounded-lg border bg-transparent p-2 focus:shadow-md focus:shadow-purple-600 focus:outline-none'
					id='postContent'
					name='postContent'
					placeholder="What's on your mind?"
					value={content}
					onChange={(event) => setContent(event.target.value)}
				/>
				<button
					type='button'
					onClick={onSaveClicked}
					disabled={!canSave}
					className='h-8 w-32 rounded-md border bg-neutral-700 enabled:hover:bg-neutral-500 disabled:opacity-50'>
					Save Post
				</button>
			</form>
		</section>
	)
}
