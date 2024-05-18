import { getDictionary } from '@/config/dictionary'
import FeedbackClient from './client_feedback'
import { Locale } from '@/config/i18.config'
import { Metadata } from 'next'
import { opengraph } from '@/lib/metadata.helper'

export async function generateMetadata(props: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const { metadata } = await getDictionary(props.params.lang)
	return {
		title: metadata['/feedbacks'].title,
		description: metadata['/feedbacks'].description,
		metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'),
		...opengraph({
			title: metadata['/feedbacks'].title,
			description: metadata['/feedbacks'].description,
		}),
	}
}

export default async function Feedbacks(props: { params: { lang: Locale } }) {
	const data = await getDictionary(props.params.lang)
	return (
		<FeedbackClient
			data={data.forms}
			pageData={data.pages['/feedbacks']}
			feedbackCardData={data.components.cards.feedbackCard}
		/>
	)
}
