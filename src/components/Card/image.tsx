import {FC} from 'react'
import {cardClasses} from '.'

interface Props {
	className?: string
	src: string
	alt: string
}

const ImageCard: FC<Props> = ({className = '', src, alt, children}) => (
	<div className={`${cardClasses} ${className}`}>
		<img src={src} alt={alt} className="rounded-t-3xl" />
		{children}
	</div>
)

export default ImageCard
