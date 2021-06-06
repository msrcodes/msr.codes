import {GetStaticProps, NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {map, MapDataItem} from '../../helpers/blog'
import Link from '../../components/Link'
import Tags, { removeTagFromQuery } from '../../components/Tags'

interface Props {
	out: MapDataItem[]
}

const BlogList: NextPage<Props> = ({out}) => {
	const router = useRouter()

	const [tags, setTags] = useState([] as string[])
	const [location, setLocation] = useState({} as Location)

	useEffect(() => {
		const t = router.query.t as string | undefined
		const ts: string[] = t?.split(',') ?? []
		setTags(ts)

		setLocation(window.location)
	}, [router.query])

	const blogsToInclude = out.filter(
		([,{data: {tags: fts}}]) => tags.length === 0 || fts.some((tag) => tags.includes(tag)),
	)

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
				{blogsToInclude.map(([k, v], i) => (
					<div
						className={`flex w-full ${i % 2 === 0 && 'flex-row-reverse'}`}
						key={`${k}-${v}-${i}`}
					>
						<div className="bg-blue-200 rounded-xl shadow p-4 mx-4 flex flex-col w-full">
							<span className="font-bold text-lg">{v.data.title}</span>
							<Tags tags={v.data.tags} className="my-2" location={location} />
							<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, ex?</span>
							<div className="mt-6 mb-4">
								<Link href={`/blog${k}`} className="bg-green-400 hover:bg-green-500 rounded p-4">Read more</Link>
							</div>
						</div>
						<div className="my-auto">
							<img src="https://placekitten.com/200/200" alt="" />
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const out = [] as MapDataItem[]
	map.forEach((v, k) => out.push([k, v]))
	return {props: {out}}
}

export default BlogList
