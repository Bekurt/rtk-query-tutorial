'use client'

import { useTypeSelector } from '@/app/hooks/typedHooks'
import { selectAllPosts } from '@/app/redux/slices/postsSlice'
import { selectUserById } from '@/app/redux/slices/usersSlice'
import Link from 'next/link'

export default function UserPage({ params }: { params: { userId: string } }) {
	const user = useTypeSelector((state) => selectUserById(state, params.userId))

	const postsForUser = useTypeSelector((state) => {
		const allPosts = selectAllPosts(state)
		return allPosts.filter((post) => post.user === params.userId)
	})

	const postTitles = postsForUser.map((post) => (
		<li key={post.id}>
			<Link href={`/posts/${post.id}`} className='flex w-full items-center justify-between'>
				{post.title}
				<span className='text-base italic'>View Post</span>
			</Link>
		</li>
	))

	return (
		<section className='p-6'>
			<h2 className='rounded-2xl bg-violet-900 p-3 text-center text-3xl font-bold'>{user?.name}</h2>
			<ul className='mt-3 bg-white/10 p-8 py-3 text-xl'>{postTitles}</ul>
		</section>
	)
}
