import Head from 'next/head'
import {FC} from 'react'
import {ISeoConfigFields} from '../../../@types/generated/contentful'

const SEO: FC<ISeoConfigFields> = ({
	title,
	description,
	siteName,
	siteUrl,
	twitterUser,
	favicon,
	image,
}: ISeoConfigFields) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content={title} />
		<meta name="og:description" property="og:description" content={description} />
		<meta property="og:site_name" content={siteName} />
		<meta property="og:url" content={siteUrl} />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:site" content={twitterUser} />
		<meta name="twitter:creator" content={twitterUser} />
		<link rel="icon" type="image/png" href={favicon?.fields?.file?.url} />
		<link rel="apple-touch-icon" href={favicon?.fields?.file?.url} />
		<meta property="og:image" content={image?.fields?.file?.url} />
		<meta name="twitter:image" content={image?.fields?.file?.url} />
	</Head>
)

export default SEO
