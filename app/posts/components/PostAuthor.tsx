import { useTypeSelector } from '@/app/hooks/typedHooks'

export function PostAuthor({ userId }: { userId: string }) {
	const author = useTypeSelector((state) => state.users.find((user) => user.id === userId))

	return <span className='ml-2 text-sm italic'>by {author ? author.name : 'Unknown author'}</span>
}
