import { getDictionary } from '@/config/dictionary'
import { Locale } from '@/config/i18.config'
import PostClientPage from './post.client'

export default async function ServicePost(props: {
	params: { lang: Locale; post: number }
}) {
	const langdata = await getDictionary(props.params.lang)
	return (
		<PostClientPage
			post={props.params.post}
			locale={props.params.lang}
			langdata={Object.assign({ root: null })}
		/>
	)
}
