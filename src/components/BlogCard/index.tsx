import {FC} from 'react'

import Tags from '../Tags'
import Link from '../Link'

interface Props {
	flipped: boolean
	location: Location
	tags: string[]
	postTitle: string
	postURL: string
}

const BlogCard: FC<Props> = ({flipped, location, tags, postTitle, postURL}) => (
	<div
		className={`flex w-full ${flipped && 'flex-row-reverse'}`}
	>
		<div className="bg-blue-200 rounded-xl shadow p-4 mx-4 flex flex-col w-full">
			<span className="font-bold text-lg">{postTitle}</span>
			<Tags tags={tags} className="my-2" location={location} />
			<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, ex?</span>
			<div className="mt-6 mb-4">
				<Link href={`/blog${postURL}`} className="bg-green-400 hover:bg-green-500 rounded p-4">Read more</Link>
			</div>
		</div>
		<div className="my-auto">
			<img src="https://placekitten.com/200/200" alt="" />
		</div>
	</div>
)

export default BlogCard
