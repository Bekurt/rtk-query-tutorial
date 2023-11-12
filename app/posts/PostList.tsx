'use client'

import Link from 'next/link'
import { useTypeSelector } from '../hooks/typedHooks'

export function PostList() {
	const posts = useTypeSelector((state) => state.posts)

	const renderedPosts = posts.map((post) => (
		<article key={post.id} className='relative mb-3 h-36 w-full rounded-md border'>
			<h3 className='rounded-t-md bg-white/10 p-2 text-xl font-medium'>{post.title}</h3>
			<p className='p-2'>{post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}</p>
			<Link href={`/posts/${post.id}`} className='absolute left-0 top-0 h-full w-full px-4 py-2 text-end italic'>
				View Post
			</Link>
		</article>
	))

	return (
		<section>
			<h2 className='mb-3 text-2xl font-medium'>Posts</h2>
			{renderedPosts}
		</section>
	)
}
