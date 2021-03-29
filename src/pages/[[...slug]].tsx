import {GetStaticProps, GetStaticPaths} from 'next'
import {getSlugs} from '../content/client'

const Page = () => (
    <h1 className="text-red-500">Test!</h1>
)

export const getStaticProps: GetStaticProps = async (context) => {
    return {props: {}}
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs()

    const paths = slugs.map((urlSlug) => {
        const slugArr = urlSlug.split('/').filter(Boolean)

        return {
            params: {slug: slugArr}
        }
    })

    return {paths, fallback: false}
}

export default Page