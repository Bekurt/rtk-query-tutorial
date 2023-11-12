'use client'

import { useTypeSelector } from '@/app/hooks/typedHooks'
import Link from 'next/link'
import { PostAuthor } from '../components/PostAuthor'

export function SinglePost({ postId }: { postId: string }) {
	const post = useTypeSelector((state) => state.posts.find((post) => post.id === postId))

	return post ? (
		<article className='relative mb-3 h-72 w-full rounded-md border'>
			<h2 className='rounded-t-md bg-white/10 p-2 text-xl font-medium'>
				{post.title}
				<PostAuthor userId={post.user} />
			</h2>
			<p className='p-2'>{post.content}</p>
			<Link href={`/editPost/${postId}`} className='absolute left-0 top-0 h-full w-full px-4 py-2 text-end italic'>
				Update Post
			</Link>
		</article>
	) : (
		<h2>Post not found!</h2>
	)
}
