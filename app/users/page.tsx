'use client'

import Link from 'next/link'
import { useTypeSelector } from '../hooks/typedHooks'
import { selectAllUsers } from '../redux/slices/usersSlice'

export default function UsersList() {
	const users = useTypeSelector(selectAllUsers)

	const renderedUsers = users.map((user) => {
		return (
			<li key={user.id} className='m-5 rounded-md bg-violet-700/50 p-1 px-4'>
				<Link href={`/users/${user.id}`} className='flex w-full items-center justify-between'>
					{user.name}
					<span className='text-base italic'>View User</span>
				</Link>
			</li>
		)
	})

	return (
		<section className='w-4/5 p-3 text-3xl'>
			<ul>{renderedUsers}</ul>
		</section>
	)
}
