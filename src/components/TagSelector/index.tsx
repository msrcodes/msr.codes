import {NextRouter} from 'next/router'
import React, {Dispatch, FC, SetStateAction} from 'react'
import {removeTagFromQuery} from '../Tags'

interface Props {
	tags: string[]
	setTags: Dispatch<SetStateAction<string[]>>
	router: NextRouter
	location: Location
	slug: string
	itemName: string
}

const TagSelector: FC<Props> = ({tags, setTags, router, location, slug, itemName}) => (
	<div className="p-4 bg-blue-100">
		<h2 className="font-extrabold text-lg">Filter By Tag</h2>
		<p>You are currently viewing all {itemName} with at least one of the following tags...</p>
		<div className="flex space-x-2 w-full mt-4">
			{
				tags.length > 0 ? (
					tags.map((t1) => (
						<button
							type="button"
							className="bg-red-200 hover:bg-red-400 font-bold px-2 rounded-md shadow-sm"
							onClick={() => {
								setTags(tags.filter((x) => x !== t1))
								const newQuery = removeTagFromQuery(location.search, t1)
								const newURL = newQuery === 't=' ? `/${slug}` : `/${slug}?${newQuery}`
								router.push(newURL)
							}}
						>
							{t1}
						</button>
					))
				) : (
					<span>No tags selected. Showing all {itemName}.</span>
				)
			}
		</div>
	</div>
)

export default TagSelector
