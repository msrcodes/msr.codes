import {NextPage} from 'next'
import {DiTerminal} from 'react-icons/di'
import {IoMdAnalytics} from 'react-icons/io'
import Card from '../components/Card'
import ImageCard from '../components/Card/image'
import Link from '../components/Link'
import Hero from '../components/Hero'

const Page: NextPage = () => (
	<>
		{/* Header Hero  */}
		<section className="h-[calc(100vh-4rem-3rem-1.5rem-4px)] prose text-center mx-auto flex px-8">
			<div className="self-center items-center flex flex-col">
				<h1>Full-Stack Software Engineer & Technical Analyst</h1>
				<p className="text-lg">I code awesome things, and help everyone understand technology.</p>
				<img className="w-64 h-64 rounded-full" src="https://placekitten.com/400/400" alt="" />
			</div>
		</section>
		{/* About me */}
		<Hero>
			<h2 className="!text-white">My name is Mikael, nice to meet you.</h2>
			<p>
				I began my journey in tech as a Java developer in 2011, primarily working on
				Minecraft mods. Since then, I have done projects in Python and have more recently
				shifted to a focus on Web.
			</p>
			<p>
				I focus on simple, strong engineering principles to focus on delivering a small
				prototype first and then working with a client to iterate and evolve quickly.
			</p>
		</Hero>
		{/* Skills & Experiences */}
		<section className="px-8 z-0 relative -top-10">
			<div className="mx-auto text-center flex flex-col md:flex-row space-y-8 md:space-y-0 max-w-5xl">
				<Card>
					<div className="prose">
						<DiTerminal className="mx-auto w-20 h-20 text-primary-default" />
						<h3>Web Developer</h3>
						<p>I like to do web stuff, Lorem ipsum dolor sit.</p>
					</div>
					<div>
						<div className="prose mt-8">
							<h4>In my toolbox:</h4>
						</div>
						<ul>
							<li>TypeScript (+ JavaScript, NodeJS)</li>
							<li>Frameworks: React (Next.js, Gatsby) </li>
							<li>CMS: Kentico Kontent, Contentful</li>
							<li>RESTful APIs, GraphQL</li>
							<li>TailwindCSS, SCSS</li>
						</ul>
					</div>
					<div>
						<div className="prose">
							<h4>Dev Tools:</h4>
						</div>
						<ul>
							<li>GitHub</li>
							<li>Terminal</li>
							<li>Vim</li>
							<li>VSCode</li>
						</ul>
					</div>
				</Card>
				<Card>
					<div className="prose">
						<IoMdAnalytics className="mx-auto w-20 h-20 p-2 text-primary-default" />
						<h3>Technical Analyst</h3>
						<p>I like to deliver stuff, Lorem ipsum dolor sit.</p>
						<h4>My experiences:</h4>
					</div>
					<ul>
						<li>Elanco Animal Health</li>
					</ul>
				</Card>
			</div>
		</section>
		{/* My Recent Projects */}
		<section className="px-8 max-w-5xl mx-auto">
			<div className="prose !text-center mx-auto py-16">
				<h2>My Recent Work</h2>
				<p>
					Here are some of the projects I have been working on recently. Want to see more?
					&nbsp;<a href="mailto:mikaelsrozee@gmail.com">Drop me an email</a> or <a href="https://github.com/mikaelsrozee" target="_blank" rel="noreferrer">peek my GitHub.</a>
				</p>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
				<ImageCard
					src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt="Wow"
				>
					<section className="p-4 prose">
						<h2>Epic Project</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem.</p>
						<Link href="/work/adventurers-amulets" className="bg-primary-default hover:bg-blue-900 !text-white !no-underline py-2 px-4 rounded-3xl">
							View Now
							<span className="font-extrabold ml-2">&gt;</span>
						</Link>
					</section>
				</ImageCard>
			</section>
		</section>
		<section className="px-8 my-8 mx-auto flex">
			<Link href="/work" className="bg-white hover:bg-gray-200 !text-primary-default border border-primary-default !no-underline py-2 px-4 rounded-3xl mx-auto">
				View all my work
				<span className="font-extrabold ml-2">&gt;</span>
			</Link>
		</section>
		<Hero>
			<h2 className="!text-white">Want to work together?</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fugit?</p>
			<Link href="mailto:mikaelsrozee@gmail.com" className="bg-white hover:bg-gray-200 !text-primary-default border border-primary-default !no-underline py-2 px-4 rounded-3xl mx-auto">
				Get in touch
				<span className="font-extrabold ml-2">&gt;</span>
			</Link>
		</Hero>
	</>
)
export default Page
