import {GetStaticProps, NextPage} from 'next'
import {getContentMap, ContentItem} from '../../helpers/content'
import BlogCard from '../../components/BlogCard'
import useContent from '../../helpers/hooks/content'
import TagSelector from '../../components/TagSelector'

interface Props {
	contentItems: ContentItem[]
}

const WorkList: NextPage<Props> = ({contentItems}) => {
	const {location, toDisplay, tags, setTags, router} = useContent(contentItems)

	return (
		<main className="mx-auto space-y-8 max-w-[64ch]">
			<div className="prose">
				<h1>My Work</h1>
				<p>These are things I have made</p>
				<p>
					Use the &quot;Filter By Tag&quot; section to select work based on what you want
					to find out more about.
				</p>
			</div>
			<TagSelector
				tags={tags}
				setTags={setTags}
				router={router}
				location={location}
				slug="work"
				itemName="works"
			/>
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
	getContentMap('works').forEach((v, k) => contentItems.push([k, v]))
	return {props: {contentItems}}
}

export default WorkList
