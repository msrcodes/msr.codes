import {GetStaticProps, NextPage} from 'next'
import {getContentMap, ContentItem} from '../../helpers/content'
import {removeTagFromQuery} from '../../components/Tags'
import BlogCard from '../../components/BlogCard'
import useContent from '../../helpers/hooks/content'

interface Props {
	contentItems: ContentItem[]
}

const BlogList: NextPage<Props> = ({contentItems}) => {
	const {location, toDisplay, tags, setTags, router} = useContent(contentItems)

	return (
		<main className="mx-auto space-y-8 max-w-[64ch]">
			<div className="prose">
				<h1>Blog Posts</h1>
				<p>Take a look at my ramblings!</p>
				<p>
					Use the &quot;Filter By Tag&quot; section to select posts based on what you want to read.
				</p>
			</div>
			<div className="p-4 bg-blue-100">
				<h2 className="font-extrabold text-lg">Filter By Tag</h2>
				<p>You are currently viewing blog posts with the following tags...</p>
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
										const newURL = newQuery === 't=' ? '/blog' : `/blog?${newQuery}`
										router.push(newURL)
									}}
								>
									{t1}
								</button>
							))
						) : (
							<span>No tags selected. Showing all blog posts.</span>
						)
					}
				</div>
			</div>
			<div className="space-y-8">
				{toDisplay.map(([k, v], i) => (
					<BlogCard
						key={`${k}-${v}-${i}`}
						flipped={i % 2 === 0}
						location={location}
						tags={v.data.tags}
						postTitle={v.data.title}
						postURL={k}
					/>
				))}
			</div>
		</main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const contentItems = [] as ContentItem[]
	getContentMap('blogs').forEach((v, k) => contentItems.push([k, v]))
	return {props: {contentItems}}
}

export default BlogList
