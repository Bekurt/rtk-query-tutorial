import { EditPostForm } from '../EditPostForm'

export default function EditPostPage({ params }: { params: { postId: string } }) {
	return (
		<section className='w-full p-8'>
			<EditPostForm postId={params.postId} />
		</section>
	)
}
