import {FC} from 'react'

import Link from '../Link'

interface Props {
	tags: string[],
	className?: string,
}

const Tags: FC<Props> = ({tags, className}) => (
	<div className={`flex space-x-2 w-full ${className}`}>
		{tags.map((tag) => (
			<Link href={`/blog?t=${tag}`} className="bg-red-200 font-bold px-2 rounded-md shadow-sm">{tag}</Link>
		))}
	</div>
)

export default Tags
