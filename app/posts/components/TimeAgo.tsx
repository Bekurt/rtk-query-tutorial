import { formatDistanceToNow, parseISO } from 'date-fns'

export function TimeAgo({ timestamp }: { timestamp: string }) {
	let timeAgo = ''
	if (timestamp) {
		const date = parseISO(timestamp)
		const timePeriod = formatDistanceToNow(date)
		timeAgo = `${timePeriod} ago`
	}

	return (
		<span title={timestamp} className='block w-full p-3 text-end'>
			<i>{timeAgo}</i>
		</span>
	)
}
