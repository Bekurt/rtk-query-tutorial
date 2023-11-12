'use client'
import { useTypeSelector } from '@/app/hooks/typedHooks'

export function SinglePost({ postId }: { postId: string }) {
	const post = useTypeSelector((state) => state.posts.find((post) => post.id === postId))

	return post ? (
		<article className='relative mb-3 h-72 w-full rounded-md border'>
			<h2 className='rounded-t-md bg-white/10 p-2 text-xl font-medium'>{post.title}</h2>
			<p className='p-2'>{post.content}</p>
		</article>
	) : (
		<h2>Post not found!</h2>
	)
}
