import React, {FC} from 'react'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'

import type {Block} from '../../content/client'

const mappings = {
	componentRichText: ({fields, id}: Block) => (
		<div
			className="prose md:prose-lg lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto"
			dangerouslySetInnerHTML={{__html: documentToHtmlString(fields.content)}}
			key={id}
		/>
	),
}

interface Props {
	blocks: Block[],
}

const Mapper: FC<Props> = (props: Props) => (
	<>
		{props.blocks.map((block) => mappings[block.type](block))}
	</>
)

export default Mapper
