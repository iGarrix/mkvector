import { getDictionary } from '@/config/dictionary'
import ClientBlog from './client_blog'
import { Locale } from '@/config/i18.config'
import { opengraph } from '@/lib/metadata.helper'
import { Metadata } from 'next'

export async function generateMetadata(props: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const { metadata } = await getDictionary(props.params.lang)
	return {
		title: metadata['/blog'].title,
		description: metadata['/blog'].description,
		metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'),
		...opengraph({
			title: metadata['/blog'].title,
			description: metadata['/blog'].description,
		}),
	}
}

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
