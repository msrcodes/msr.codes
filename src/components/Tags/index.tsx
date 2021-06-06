import {FC} from 'react'

import Link from '../Link'

interface Props {
	tags: string[],
	className?: string,
	location?: Location,
}

const appendTagToQuery = (s: string, toAppend: string) => {
	const params = new URLSearchParams(s)

	const curVal = (params.get('t') ?? '').split(',').filter(Boolean)

	if (!curVal.includes(toAppend)) {
		const updatedVal = [...curVal, toAppend]
		const toSet = updatedVal.join(',')
		params.set('t', toSet)
	}

	return `${params.toString().replace(/%2C/gi, ',')}`
}

export const removeTagFromQuery = (s: string, toRemove: string) => {
	const params = new URLSearchParams(s)

	const curVal = (params.get('t') ?? '').split(',').filter(Boolean)

	const updatedVal = curVal.filter((t) => t !== toRemove)
	const toSet = updatedVal.join(',')
	params.set('t', toSet)

	return `${params.toString().replace(/%2C/gi, ',')}`
}

const getHref = (tag: string, location?: Location) => {
	if (!location) return `/blog?t=${tag}`

	const query = appendTagToQuery(location.search, tag)

	return `/blog?${query}`
}

const Tags: FC<Props> = ({tags, className, location}) => (
	<div className={`flex space-x-2 w-full ${className}`}>
		{tags.map((tag, i) => (
			<Link
				href={getHref(tag, location)}
				className="bg-red-200 font-bold px-2 rounded-md shadow-sm"
				key={`${tags}-${tag}-${i}`}
			>
				{tag}
			</Link>
		))}
	</div>
)

export default Tags
