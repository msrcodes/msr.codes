import {GetStaticProps, NextPage} from 'next'
import {map, MapDataItem} from '../../helpers/blog'
import Link from '../../components/Link'

interface Props {
	out: MapDataItem[]
}

const BlogList: NextPage<Props> = ({out}) => (
	<main className="prose mx-auto space-y-8">
		{out.map(([k, v], i) => (
			<div className={`flex w-full ${i % 2 === 0 && 'flex-row-reverse'}`}>
				<div className="bg-blue-200 rounded-xl shadow p-4 mx-4 flex flex-col w-full">
					<span className="font-bold text-lg">{v.data.title}</span>
					<span>{v.data.tags}</span>
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
	</main>
)

export const getStaticProps: GetStaticProps = async () => {
	const out = [] as MapDataItem[]
	map.forEach((v, k) => out.push([k, v]))
	return {props: {out}}
}

export default BlogList
