'use client'

import { useState } from 'react'
import { useTypeDispatch, useTypeSelector } from '../hooks/typedHooks'
import { updatePost } from '../redux/postsSlice'
import { useRouter } from 'next/navigation'

export function EditPostForm({ postId }: { postId: string }) {
	const post = useTypeSelector((state) => state.posts.find((post) => post.id === postId))

	const [title, setTitle] = useState(post?.title)
	const [content, setContent] = useState(post?.content)

	const dispatch = useTypeDispatch()
	const router = useRouter()

	const onSaveClicked = () => {
		if (title && content) {
			dispatch(updatePost({ id: postId, title, content }))
			router.push(`/posts/${postId}`)
		}
	}

	return (
		<section className='mb-20'>
			<h2 className='mb-3 text-2xl font-medium'>Add a New Post</h2>
			<form className='flex flex-col'>
				<label htmlFor='postTitle' className='mb-1 text-lg italic'>
					Post Title:
				</label>
				<input
					className='mb-2 w-80 rounded-md border bg-transparent px-2 py-1'
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={(event) => {
						setTitle(event.target.value)
					}}
				/>
				<label htmlFor='postContent' className='mb-1 text-lg italic'>
					Content:
				</label>
				<textarea
					className='mb-4 min-h-[80px] w-4/5 rounded-lg border bg-transparent p-2'
					id='postContent'
					name='postContent'
					value={content}
					onChange={(event) => setContent(event.target.value)}
				/>
				<button
					type='button'
					onClick={onSaveClicked}
					className='h-8 w-32 rounded-md border bg-neutral-700 hover:bg-neutral-500'>
					Save Post
				</button>
			</form>
		</section>
	)
}
