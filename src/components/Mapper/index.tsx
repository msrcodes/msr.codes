import React, {FC} from 'react'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'

import type {Block, Fields} from '../../content/client'

const mappings = {
	componentRichText: (fields: Fields) => (
		<div className="prose" dangerouslySetInnerHTML={{__html: documentToHtmlString(fields.content)}} />
	),
}

interface Props {
	blocks: Block[],
}

const Mapper: FC<Props> = (props: Props) => (
	<>
		{props.blocks.map((block) => mappings[block.type](block.fields))}
	</>
)

export default Mapper
