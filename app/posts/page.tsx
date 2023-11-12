import { AddPostForm } from './AddPostForm'
import { PostList } from './PostList'

export default function PostPage() {
	return (
		<main className='w-full p-8'>
			<AddPostForm />
			<PostList />
		</main>
	)
}
