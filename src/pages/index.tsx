/* eslint-disable max-len -- Testing */
import {NextPage} from 'next'
import Link from '../components/Link'

const Page: NextPage = () => (
	<>
		<article className="prose mx-auto mb-6">
			<h1>I made this blog</h1>
			<div className="flex space-x-2 w-full">
				<Link href="/blog?t=react" className="bg-red-200 font-bold px-2 rounded-md shadow-sm">React</Link>
				<Link href="/blog?t=nextjs" className="bg-green-200 font-bold px-2 rounded-md shadow-sm">Next.js</Link>
				<Link href="/blog?t=typescript" className="bg-purple-200 font-bold px-2 rounded-md shadow-sm">TypeScript</Link>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis ipsam repellendus rem, in blanditiis. Saepe, temporibus. Aliquam quia ipsa cum mollitia dolore hic ratione. Aspernatur magni quam error. Facilis.</p>
			<p>Asperiores, sit in. Reprehenderit error culpa dolores necessitatibus recusandae officia illum. Magnam, sint neque. Earum, illo, consectetur fugiat odio reprehenderit sunt voluptatibus pariatur perspiciatis iusto voluptates consequuntur consequatur ut quae.</p>
			<img src="https://images.unsplash.com/photo-1569506474518-ba135df90c6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="A donkey" className="rounded" />
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus alias fuga. Repellat voluptas a voluptates ex dignissimos saepe, optio sed! Facilis laudantium officia quasi reprehenderit voluptate eaque quisquam ducimus?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid maiores quam a. Aliquam, hic vero minus consequatur enim assumenda maxime beatae culpa quibusdam sapiente, excepturi quam, ipsum vel porro?</p>
		</article>
	</>
)
export default Page
