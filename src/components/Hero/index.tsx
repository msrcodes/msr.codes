import {FC} from 'react'

const HeroSection: FC = ({children}) => (
	<section className="bg-primary-default px-8">
		<div className="prose !text-center !text-white mx-auto py-16 z-10">
			{children}
		</div>
	</section>
)

export default HeroSection
