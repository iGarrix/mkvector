import { getDictionary } from '@/config/dictionary'
import ClientBlog from './client_blog'
import { Locale } from '@/config/i18.config'

export default async function Blog(props: { params: { lang: Locale } }) {
	const data = await getDictionary(props.params.lang)
	return (
		<ClientBlog
			languagedata={Object.assign(
				{ root: data.pages['/blog'] },
				{
					blogcard: data.components.cards.blogCard,
					locale: props.params.lang,
				}
			)}
		/>
	)
}
