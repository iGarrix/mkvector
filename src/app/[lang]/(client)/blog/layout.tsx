import { getDictionary } from '@/config/dictionary'
import { Locale } from '@/config/i18.config'
import { opengraph } from '@/lib/metadata.helper'
import type { Metadata } from 'next'

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

export default function BlogLayout(
	props: Readonly<{ children: React.ReactNode }>
) {
	return props.children
}
