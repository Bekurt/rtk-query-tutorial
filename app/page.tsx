import Link from 'next/link'

export default function Home() {
	return (
		<section className='my-10 h-32 w-full text-center text-2xl font-bold'>
			<Link href='/posts'>Welcome to the Redux Essentials example app!</Link>
		</section>
	)
}
