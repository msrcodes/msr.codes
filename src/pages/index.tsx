import {NextPage} from 'next'
import {DiTerminal} from 'react-icons/di'
import {IoMdAnalytics} from 'react-icons/io'
import {GiSpiderWeb} from 'react-icons/gi'

import Card from '../components/Card'
import Link from '../components/Link'
import Hero from '../components/Hero'

const Page: NextPage = () => (
	<>
		{/* Header Hero  */}
		<section className="h-[calc(100vh-4rem-3rem-1.5rem-4px)] text-center mx-auto flex px-8">
			<div className="self-center items-center flex flex-col mx-auto">
				<div className="prose">
					<h2>Hi, I&apos;m <span className="text-secondary">Mikael Rozee</span>.</h2>
					<h1>Software Engineer-Consultant</h1>
					<p className="text-lg">I wear many hats. From solution architecture to delivery planning to hands-on-keyboard div slinging, I choose the right hats for any given task.</p>
				</div>
				<Link href="https://linkedin.com/in/mikaelsrozee" className="bg-white hover:bg-gray-200 !text-primary-default border border-primary-default !no-underline py-2 px-4 rounded-3xl mx-auto my-8">
					I'm currently Looking for Work
					<span className="font-extrabold ml-2">&gt;</span>
				</Link>
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
			<p>
				I am currently the Engineering Lead at Google Developer Student Clubs, University of Portsmouth.
			</p>
		</Hero>
		{/* Skills & Experiences */}
		<section className="px-8 z-0 relative -top-10">
			<div className="mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
				<Card className="w-full">
					<div className="prose">
						<GiSpiderWeb className="mx-auto w-20 h-20 text-primary-default" />
						<h3>Web Developer</h3>
						<p>
							Web is my current focus. To me, the web is an accessible and diverse
							platform that is exciting to be a part of.
						</p>
					</div>
					<div className="mb-8">
						<div className="prose mt-8">
							<h4 className="!text-secondary">In my toolbox:</h4>
						</div>
						<ul>
							<li><strong>Languages:</strong> TypeScript (+ JavaScript, NodeJS)</li>
							<li><strong>Frameworks:</strong> React (Next.js, Gatsby) </li>
							<li><strong>CMS:</strong> Kentico Kontent, Contentful</li>
							<li><strong>Database:</strong> PostgresSQL, NoSQL </li>
							<li><strong>CI/CD:</strong> Azure DevOps, GitHub Actions</li>
							<li><strong>APIs:</strong> RESTful APIs, GraphQL</li>
							<li><strong>Style:</strong> TailwindCSS, SCSS</li>
							<li><strong>Host:</strong> Microsoft Azure, Netlify</li>
						</ul>
					</div>
				</Card>
				<Card className="w-full">
					<div className="prose">
						<DiTerminal className="mx-auto w-20 h-20 text-primary-default" />
						<h3>Software Engineer</h3>
						<p>
							Despite Web being my main focus now, I have a decade of experience in other
							technologies.
						</p>
					</div>
					<div>
						<div className="prose mt-8">
							<h4 className="!text-secondary">I have experience with:</h4>
						</div>
						<ul>
							<li><strong>Java</strong> (+ Gradle, GSON)</li>
							<li><strong>Python</strong> (+ pip, Selenium, TensorFlow)</li>
						</ul>
					</div>
					<div className="mb-8">
						<div className="prose mt-8">
							<h4 className="!text-secondary">With a little help from:</h4>
						</div>
						<ul>
							<li><strong>GitHub</strong></li>
							<li><strong>Terminal</strong> (Linux, WSL)</li>
							<li><strong>Vim</strong> (primary editor)</li>
							<li><strong>VSCode</strong> (secondary editor)</li>
							<li><strong>IntelliJ IDEA</strong> (for Java, Python)</li>
							<li><strong>Postman</strong></li>
						</ul>
					</div>
				</Card>
				<Card className="w-full">
					<div className="prose">
						<IoMdAnalytics className="mx-auto w-20 h-20 p-2 text-primary-default" />
						<h3>Technical Analyst</h3>
						<p>Software Engineering is more than figuring out how to exit Vim.</p>
						<p>
							I enjoy working between technical and non-technical stakeholders to
							elicit requirements and then build a solution with a team using the
							right methodologies for the job.
						</p>
					</div>
					<div className="mb-8">
						<div className="prose mt-8">
							<h4 className="!text-secondary">My Experiences:</h4>
						</div>
						<div className="prose">
							<p><strong>Elanco Animal Health</strong>, Global Commercial IT</p>
						</div>
					</div>
					<div className="mb-8">
						<div className="prose mt-8">
							<h4 className="!text-secondary">Analyst arsenal:</h4>
						</div>
						<ul>
							<li><strong>Azure DevOps</strong> (Backlog management, reporting)</li>
							<li><strong>Miro</strong> (Virtual whiteboarding)</li>
							<li><strong>LucidChart</strong> (Solution design)</li>
							<li><strong>EasyRetro</strong> (Sprint retrospectives)</li>
						</ul>
					</div>
				</Card>
			</div>
		</section>
		<Hero>
			<h2 className="!text-white">Want to work together? Want to have a chat?</h2>
			<p>I&apos;d love to. Shoot me an email and we can grab a coffee.</p>
			<Link href="mailto:mikaelsrozee@gmail.com" className="bg-white hover:bg-gray-200 !text-primary-default border border-primary-default !no-underline py-2 px-4 rounded-3xl mx-auto">
				Get in touch
				<span className="font-extrabold ml-2">&gt;</span>
			</Link>
		</Hero>
	</>
)
export default Page
