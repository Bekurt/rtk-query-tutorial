'use client'

import Link from 'next/link'
import { useTypeDispatch, useTypeSelector } from '../../hooks/typedHooks'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { fetchPosts, post, selectAllPosts } from '@/app/redux/slices/postsSlice'
import { useEffect } from 'react'

function PostExcerpt({ post }: { post: post }) {
	return (
		<article id='post-excerpt' className='relative mb-3 h-36 w-full rounded-md border'>
			<h3 className='rounded-t-md bg-white/10 p-2 text-xl font-medium'>
				{post.title}
				<PostAuthor userId={post.user} />
			</h3>
			<p className='p-2'>{post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}</p>
			<TimeAgo timestamp={post.date} />
			<Link href={`/posts/${post.id}`} className='absolute left-0 top-0 h-full w-full px-4 py-2 text-end italic'>
				View Post
			</Link>
		</article>
	)
}

export function PostList() {
	const dispatch = useTypeDispatch()
	const posts = useTypeSelector(selectAllPosts)

	const error = useTypeSelector((state) => state.posts.error)

	const postStatus = useTypeSelector((state) => state.posts.status)
	useEffect(() => {
		if (postStatus === 'idle') {
			dispatch(fetchPosts())
		}
	}, [postStatus, dispatch])

	let content
	switch (postStatus) {
		case 'loading':
			content = <div>Loading...</div>
			break
		case 'success':
			content = posts.map((post, idx) => {
				return <PostExcerpt key={idx} post={post} />
			})
			break
		case 'fail':
			content = <div>{error}</div>
			break
		default:
			break
	}

	return (
		<section>
			<h2 className='mb-3 text-2xl font-medium'>Posts</h2>
			{content}
		</section>
	)
}
