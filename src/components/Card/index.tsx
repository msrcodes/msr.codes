import {FC} from 'react'

interface Props {
	className?: string
}

export const cardClasses = 'mx-auto bg-white border border-gray-300 shadow-md rounded-3xl'

const Card: FC<Props> = ({children, className}) => (
	<section className={`${cardClasses} ${className} p-4`}>
		{children}
	</section>
)

export default Card
