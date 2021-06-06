import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {ContentItem} from '../content'

const useContent = (contentItems: ContentItem[]) => {
	const router = useRouter()

	const [tags, setTags] = useState([] as string[])
	const [location, setLocation] = useState({} as Location)

	useEffect(() => {
		const t = router.query.t as string | undefined
		const ts: string[] = t?.split(',') ?? []
		setTags(ts)

		setLocation(window.location)
	}, [router.query])

	const toDisplay = contentItems.filter(
		([,{data: {tags: fts}}]) => tags.length === 0 || fts.some((tag) => tags.includes(tag)),
	)

	return {location, toDisplay, tags, setTags, router}
}

export default useContent
