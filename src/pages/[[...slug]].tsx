import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import {FC} from 'react'
import {getSlugs, getPageBlocks} from '../content/client'
import type {Block} from '../content/client'

import Mapper from '../components/Mapper'

interface Props {
    blocks: Block[],
}

const Page: FC<Props> = ({blocks}) => (
    <Mapper blocks={blocks} />
)

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params!
    const slugArr = params.slug as string[] || ['']
    const slug = `/${slugArr.join('/')}`

    const blocks = (await getPageBlocks(slug))!

    return {props: {blocks}}
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs()

    const paths = slugs.map((urlSlug) => {
        const slugArr = urlSlug.split('/').filter(Boolean)

        return {
            params: {slug: slugArr}
        }
    })

    return {paths, fallback: true}
}

export default Page