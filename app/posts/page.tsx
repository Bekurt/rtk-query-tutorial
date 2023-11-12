import { AddPostForm } from './components/AddPostForm'
import { PostList } from './components/PostList'

export default function PostPage() {
	return (
		<main className='w-full p-8'>
			<AddPostForm />
			<PostList />
		</main>
	)
}
