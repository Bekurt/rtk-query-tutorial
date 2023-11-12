import { SinglePost } from './SinglePost'

export default function SinglePostPage({ params }: { params: { postId: string } }) {
	return (
		<section className='w-full p-8'>
			<SinglePost postId={params.postId} />
		</section>
	)
}
